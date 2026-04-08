import mongoose from "mongoose";
// require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
import dns from "dns";
dns.setServers( ["8.8.8.8", "1.1.1.1"]);
async function connectToDB(){
    let DB = `${process.env.DB_URL}`
    console.log(DB)
    try{
        await mongoose.connect(DB);
        console.log("Connected To DB");
    }
    catch(err){
        console.log("Error",err)
    }
}

export default connectToDB;