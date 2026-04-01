import mongoose from "mongoose";
async function connectToDB(){
    let DB = `${process.env.DB_URL}/bloodbank`
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