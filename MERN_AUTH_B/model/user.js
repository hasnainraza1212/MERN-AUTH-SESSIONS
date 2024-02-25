import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    name:String,
    password:String
})  

const UserModel = mongoose.model("myUser", UserSchema)
export default UserModel