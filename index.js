const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const NewsModel = require ("./models/news.js");
const SignupModel=require("./models/Signup.js");

app.listen(3001, () => {});
app.get("/",(req ,res)=>{
res.json({name: "divya" });
});
app.post("/api/addnews",async(req,res)=>{
    try{
const news = await NewsModel.create(req.body);
res.status(200).json(news);
console.log(req.body);
    }catch (error){
        res.send(500);
    }
});

app.post("/api/signup",async(req,res)=>{
    try{
const Signup = await SignupModel.create(req.body);
res.status(200).json(Signup);
console.log(req.body);
    }catch (error){
        res.send(500);
    }
});
const SignupModel = require("./models/Signup");

// Example POST route for sign-up
app.post("/api/signin", async (req, res) => {
  try {
    const newUser = await SigninModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});


app.get("/api/news",async(req,res)=>{
    try{
        const news=await NewsModel.find({});
        res.status(200).json(news);
        console.log(req.body);
    }
    catch(error){
        res.send(500);
    }
});
app.get("/api/news",async(req,res)=>{
    try{
        const{id}=req.params;
        const news =await NewsModel.findById(id);
        res.status(200).json(news);
    }catch(error){
        res.send(500);
    }
});
app.put("/api/news/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        constnews=await NewsModel.findByIdAndUpdate(id,req.body);
        if(!news){
            return res.status(404).json({message:"News not found"});
        }
        const updatedNews=await NewsModel.findById(id);
        res.status(200).json(updatedNews);
    }catch(error){
        res.send(500);
    }
});
app.delete("/api/news/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        constnews=await NewsModel.findByIdAndUpdate(id,req.body);
        if(!news){
            return res.status(404).json({message:"News not found"});
        }
        const updatedNews=await NewsModel.findById(id);
        res.status(200).json("deleted");
    }catch(error){
        res.send(500);
    }
});
mongoose
.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connect to db");
});    
