const express = require("express");
const router = express.Router();

const {signUp, signin} = require('../Controller/authController');


router.post("/signup", signUp);
router.post("/signin", signin);

module.exports = router;