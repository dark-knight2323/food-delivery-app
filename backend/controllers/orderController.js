import OrderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";


// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
    try {
        const newOrder = new OrderModel({
            userId : req.body.userId,
            items : req.body.items,
            amount : req.body.amount,
            address : req.body.addredd
        }) 

        await newOrder.save();
        await UserModel.findByIdAndUpdate(req.body.userId,{cartData : {}});

        const lineItems = req.body.items.map((item) => ({
            priceData  : {
                currency : "inr"
            }
        }))
    } catch (error) {

    }
}

export {placeOrder}
