import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    cartData : {type : Object, default : {}}
},{minimize:false});

const UserModel = mongoose.models.user || mongoose.model('user',userSchema);
// if model already exits then it is used else new one is created

export default UserModel;