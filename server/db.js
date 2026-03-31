import mongoose from "mongoose";
async function connectToDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/bloodbank");
        console.log("Connected To DB");
    }
    catch(err){
        console.log("Error",err)
    }
}

export default connectToDB;