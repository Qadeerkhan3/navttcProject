const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected Successfully...");
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

const productSchema = new mongoose.Schema({
  product_name: String,
  price: String,
  description: String,
  image: String
})

const Product = new mongoose.model("Product", productSchema);

app.post("/api/product", async (req,res) =>{
  const {product_name, price, description, imageUrl} = req.body;

  try {
    const products = new Product({product_name, price, description, image: imageUrl});
    await products.save();
    return res.status(200).json({message: "product added successfully"});
  } catch (error) {
    
     return res.status(500).json({message: "internal server error"});

  }

})

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
  console.log('login hitted')
  
  try {
    const existingUser = await User.findOne({email});
    if(!existingUser){
      return res.status(401).json({message: "user not found"});
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if(!isMatch){
      return res.status(401).json({message: "invalid credentials"});
    }

    const token = jwt.sign({ userId: existingUser._id }, process.env.SECRET_KEY, {
 expiresIn: '1h',
 });

    return res.status(200).json({token, message: "login successful",username:existingUser.username});

  } catch (error) {

    return res.status(500).json({message: "internal server error"});
    
  }
})


  app.listen(port,()=> {
        console.log("Server is running on port " + port);
    });


