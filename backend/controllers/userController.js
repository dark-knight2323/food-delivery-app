import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user doesnot exist" });
    }

    // comparing password entered by the user and encrypted password in the db
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error occured" });
  }
}

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
async function registerUser(req, res) {
  const { name, password, email } = req.body;
  try {
    // checking if user already exits
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    // validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }

    // encrypting the user password before storing
    const salt = await bcrypt.genSalt(10); // range from 5 to 15
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating user model instance
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // saving data into database
    const user = await newUser.save();

    // generating token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "error in registering user" });
  }
}

export { loginUser, registerUser };
