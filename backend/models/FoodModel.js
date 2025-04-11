import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({ 
    name : { type: String, required: true },
    description : {type: String, required: true},
    price : {type : Number,required: true},
    image : {type: String, required: true}, // stores url of image
    category : {type: String, required: true}
});

const FoodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// when this file runs for the first time, it will create a model called food
// when it runs again, it will just use the existing model called food

export default FoodModel;