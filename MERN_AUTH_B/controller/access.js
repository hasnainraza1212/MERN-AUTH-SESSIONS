export const access = (req, res)=>{
    if (!req.session._id){
      return res.status(403).send({success:false, message:"access denied Unauthorized!"})
    }
    return res.status(200).send({success:true, message:"access granted"})
    }