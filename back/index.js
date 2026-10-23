const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
app.use(cors());
const path = require('path') 
const port = process.env.PORT
console.log(process.env.MONGO_URL)
app.use(express.json());
app.use(cors());
 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
})

const beatRoutes = require('./Route/beatRoutes');
const authRoutes = require('./Route/authRoutes')
app.use('/', beatRoutes);
app.use('/auth', authRoutes) 

app.listen(port, () => {
  console.log("listening on port:", port);
});