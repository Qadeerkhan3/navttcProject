const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
};

connectDB();


const userSchema = new mongoose.Schema({
   username: String,
   email: String,
   password : String,
})

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res)=>{
  const {username, email, password} = req.body;

  try {
    
    const alreadyUser = await User.findOne({email});

    if(alreadyUser){
      return res.status(401).json({message: "user already exist"});
    }

    const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({username,email, password: hashedPassword});

        await newUser.save();

        return res.status(200).json({message: "user registered successfully"});
  } catch (error) { 
    console.log(error);
    res.status(500).json({message: "internal server error"}); 
  }
})

app.post('/api/login', async (req, res)=>{
  const {email, password} = req.body;
  
  try {
    const existingUser = await User.findOne({email});
    if(!existingUser){
      return res.status(401).json({message: "user not found"});
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if(!isMatch){
      return res.status(401).json({message: "invalid credentials"});
    }

    return res.status(200).json({message: "login successful"});

  } catch (error) {

    return res.status(500).json({message: "internal server error"});
    
  }
})


  app.listen(port,()=> {
        console.log("Server is running on port " + port);
    });


