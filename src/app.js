const express = require("express");
const app = express();
const noteModel = require("./model/note.model");

app.use(express.json());
// notes POST,GET,Update,delete

app.post("/notes",async (req,res)=>{
    const data =req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    
    
    res.status(201).json({
        success:true,
        message:"note created successfully",
        
    })
});


module.exports = app;