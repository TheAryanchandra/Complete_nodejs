const express = require('express');

const app = express(); // server ka instance create kra hae 

app.get("/", (req, res) => {

    res.send("hello world");
});

app.get("/about", (req, res) => {
    res.send("about page");
});

app.listen(3000, () => {
    console.log(`server is running on port 3000`); //server ko start krne kae liye 3000 is the port number 
}); 