const mongoose = require("mongoose");

async function dbConnect(){
   await mongoose.connect("mongodb+srv://backend:XlfcrQT5LWbFoW3Q@backend-learning-develo.rzigrlv.mongodb.net/halley");
    console.log("Database connected successfully");
}

module.exports = dbConnect;