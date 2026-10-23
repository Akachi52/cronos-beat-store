const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const {addNewBeat, getallBeats, getBeatById, deleteBeatById} = require('../Controller/Controller');
const {verifyToken} = require('../middleware/verify_token');


const storage = multer.diskStorage({
   destination: function (req, file, cb) { 
     cb(null, './uploads/')
   },
   filename: function (req, file, cb) {
     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     cb(null, file.fieldname + '-' + uniqueSuffix+path.extname(file.originalname))
     console.log(file)
   }
 }) 
const upload = multer({ storage: storage })

 
// CREATE BEAT
router.post("/beats", verifyToken, upload.single("imageUrl"), addNewBeat);

router.get("/beats", getallBeats);
router.get("/beats/:id", getBeatById);
router.delete("/beats/:id", deleteBeatById);

module.exports = router;