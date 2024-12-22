const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const NewsModel require ("./models/news.js");
app.listen(3000, () => {});
app.get("/",(req,res)=>{
res.json({name: "hari" });
});
app.post("/api/addnews",async{req,res}=>{
    try{
const news = await NewsModel.create(req.body);
res.status(200).json(news);
console.log(req.body);
    }catch (error){
        res.send(500);
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
app.put("/apu/news/:id",async(req,res)=>{
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
app.delete("/apu/news/:id",async(req,res)=>{
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
.connect(mongodb://localhost:27017/

)
.then(()=>{
    console.log("connect to db");
});


