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

    const post = await postModal.create({
        image:result.url,
        caption:req.body.caption
    });

    res.status(201).json({message:"Post created successfully",post})

});

app.get("/posts",async(req,res)=>{
    const posts = await postModal.find();
    res.status(200).json({message:"Posts fetched successfully",posts})
})









module.exports = app;
