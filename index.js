const express = require("express");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());

const blog = require("./routes/blog");

//Mount
app.use("/api/v1", blog);

const connectwithDb = require("./config/database");
connectwithDb();

//Start The server

app.listen(PORT, ()=>{
    console.log(`App is started at Port no. ${PORT}`);
})

app.get("/", (req, res)=>{
    res.send("This is my Homepage Baby");
})