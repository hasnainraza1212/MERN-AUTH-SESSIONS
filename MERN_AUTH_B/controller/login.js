import UserModel from "../model/user.js";

export const login = async (req, res) => {
  const { name, password } = req.body;
  const isUserExist = await UserModel.findOne({ name });
  if (!isUserExist) {
    return res.status(404).send({ message: "user not found!", success: false });
  }

  // const isUserExist = UserModel.findOne({name:name})
  // Here is where you would query the database
  // Once you get the user out of the database, you would set their id on sessions instead of the username example we are using below
  req.session._id = isUserExist._id;
  req.session.auth = true;
  // res.status(200).send({...isUserExist})
  return res.status(200).send({ message: "Login successful!", user: isUserExist , success:true});
};
