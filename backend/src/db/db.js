const mongoose = require("mongoose");

async function dbConnect(){
   await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log("Database connected successfully");
}

module.exports = dbConnect;