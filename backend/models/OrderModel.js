import mongoose from "mongoose";

const orderSchema = new mongoose.Schema( {
    userId : {type : String, required : true},
    items : {type : Array, required : true},
    amount : {type : Number, required : true},
    address : {type : String, required : true},
    status : {type : String, default : "Preparing Food"},
    date : {type : Date, default : Date.now()},
    payment : {type : Boolean, default : false}
})

const OrderModel = mongoose.models.order || mongoose.model("Order",orderSchema);

export default OrderModel;