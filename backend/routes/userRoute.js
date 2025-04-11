import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js';

const userRouter = express.Router();
// this file is like mini express app that also handles requests

userRouter.post("/register", registerUser);
userRouter.post("/login",loginUser);

export default userRouter; 