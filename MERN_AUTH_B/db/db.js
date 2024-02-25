import mongoose from "mongoose"


const connectMongoDBClient = async()=>{
        try{
           const res =await mongoose.connect(process.env.MONGO_URI);
           console.log("MONGO DB CONNECTED!")

        }catch(error){
            console.log(error)
        }
}

export default connectMongoDBClient