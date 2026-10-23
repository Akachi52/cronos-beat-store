const BeatModel = require('../models/beatmodel');

// CREATE - Add a new Beat to the database
const addNewBeat = async (req, res) => {
    try {
      console.log(req.user.id, 'verified user ID from token'); // Debugging log to check the user ID from the token
        
        const { name, index, img, author, lenght, tempo} = req.body
        
        let audioSrc = req.file ? req.file.path : "uploads/play.jpg";

        const beatMod = new BeatModel({  name, index, img, author, lenght, tempo, audioSrc});
        await beatMod.save()
        return res.status(201).json(beatMod)
    } catch (error) {
        console.log('add beat err: ', error);
        return res.status(500).json({ message: error.message })
    }

}


// READ - Get all Beats from the database
const getallBeats = async (req, res) => {
  try {
    const beatMod = await BeatModel.find();
    return res.status(200).json(beatMod); 
  } catch (err) {
    console.log('err getting all beats: ', err)    
    return res.status(500).json({ error: err.message });
  }
}; 

// READ - Get a Beat by ID
const getBeatById = async (req, res) => {
  try {
    const beatMod = await BeatModel.findById(req.params.id); 
    res.status(200).json(beatMod);
  } catch (err) {
    console.log('err getting by id: ', err)
    res.status(500).json({ error: err.message });
  }
};

// DELETE - Delete Beat by ID
const deleteBeatById = async (req, res) => {
  try {
    const beatMod = await BeatMod.findByIdAndDelete(req.params.id); 
    res.status(200).json(beatMod);
  } catch (err) {
    console.log('err getting by id: ', err)    
    res.status(500).json({ error: err.message });
  }
};


module.exports = {addNewBeat, getallBeats, getBeatById, deleteBeatById};