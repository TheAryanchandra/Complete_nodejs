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


app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        success:true,
        message:"notes fetched successfully",
        data:notes
    })
    
})

// find => this will return the [] or [{},{},{},{},...n times]
// findOne => this will return the {} or null if not found


app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        success:true,
        message:"note deleted successfully",
        
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const description=req.body.description;
    

    const note=await noteModel.findOneAndUpdate(
        {
            _id:id
        },
        {
            title:title,
            description:description
        },
        res.status(200).json({
            success:true,
            message:"note updated successfully",
            data:note
        })
    )
})

module.exports = app;