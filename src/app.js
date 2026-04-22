// server ko Create krna 

const express = require("express");

const app = express();

const notes =[]

app.use(express.json());
// post api 
app.post("/notes",(req,res)=>{
  notes.push(req.body);
  res.status(201).json({
    message:"Note created successfully"});
  console.log(req.body);
})
// get method
app.get("/notes",(req,res)=>{
  res.status(200).json({
    notes:notes,
    message:"Notes fetched successfully"
  });
})

app.delete("/notes/:index",(req,res)=>{
 const index =req.params.index;
 console.log(index);
 delete notes[index];
 res.status(200).json({message:"Note deleted successfully"});
})


app.patch("/notes/:index",(req,res)=>{
 const index =req.params.index;
 const description =req.body.description;
 const title =req.body.title;
 notes[index].description = description;
 notes[index].title = title;
 console.log(description);
 console.log(title);
 res.status(200).json({message:"Note updated successfully"});
 
})

module.exports=app;



