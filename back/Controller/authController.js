const Auth = require("../models/authmodel");
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP - Add a new user to the database
const signUp = async (req, res) => {
    req.body.email
    let theemail = req.body.email
    let thepassword = req.body.password
    let thename = req.body.name
    if (!theemail || !thepassword || !thename) {
        return res.status(400).json({ message: "Fill in the details" });
    }
     
    let theduplicateemail = await Auth.findOne({ email: req.body.email });
    if (theduplicateemail) {
        return res.status(400).json({ message: "Email already exists" });
    }


    try {
    const hashedPassword = bcrypt.hashSync(thepassword, 10);
    const user = new User({
        name: thename,
        age: req.body.age
    });
    await user.save();

    const auth = new Auth({
        password: hashedPassword,
        email: theemail,
        userid: user._id
    });    
        await auth.save();
        return res.status(200).json({ message: "Sign up successful" });
    } catch (err) {
        return res.status(500).json({ message: "Error signing up", error: err.message });
    }
};


// SIGNIN - Sign in a user and return a token
const signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Fill in all fields" });
    } 
    
    const user = await Auth.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }   

    // jwt.sign("segun", "secret", (err, token) => {
    //     if (err) {
    //         console.error("Error generating token:", err);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Replace 'secret' with a real secret
    console.log(token)

    res.cookie('access_token', token, { // Set the token in a cookie
        httpOnly: true, // Make the cookie accessible only by the web server
        sameSite: 'None', //  Allow cross-site cookies (for development, be cautious in production)
        secure: true,   //  Ensure the cookie is only sent over HTTPS (for production)
        path: '/',       //  Set the cookie path to be accessible across the entire site
    })
    return res.status(200).json({ message: "Sign in successful" });
};

module.exports = { signUp, signin };