const app = require("./src/app.js");
const dbConnect = require("./src/db/db.js");
require("dotenv").config();


dbConnect();
app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});