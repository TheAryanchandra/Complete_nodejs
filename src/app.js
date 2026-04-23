const express = require("express");
const postModal = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service");

const app = express();

app.use(express.json());
const upload = multer({storage: multer.memoryStorage()});



app.post("/create-post",upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer);

    console.log(result);
    

    await postModal.create({
        image:result.url,
        caption:req.body.caption});

    res.status(201).json({message:"Post created successfully"})

    

    
    
});





module.exports = app;
