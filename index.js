const connectDB = require("./startup/db");
const express = require("express");
const app = express();
//const users = require("./routes/users");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
//app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});