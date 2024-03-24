const mongoose = require("mongoose");

require("dotenv").config();

function connectwithDb(){
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{
        console.log("Db Connected Successfully")
    })
    .catch((error)=>{
        console.log(error);
        console.log("DB facing Connection issues");
        process.exit(1);
    })
};

module.exports = connectwithDb;