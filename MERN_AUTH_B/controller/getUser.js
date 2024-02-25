import UserModel from "../model/user.js"
export const getUser = async(req, res)=>{
   const user = await UserModel.findOne({_id:req.session._id})
    return res.status(200).send({user})
}