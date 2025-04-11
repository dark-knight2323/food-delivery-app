import FoodModel from "../models/FoodModel.js";
import fs from "fs";

// add food item

const addFoodItem = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    const addedFood = await food.save();
    res
      .status(201)
      .json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error in adding food item to db" });
  }
};

// shows all the foods list

async function listFoodItems(req, res) {
  try {
    const foods = await FoodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: "Error in fetching food items" });
  }
}

async function removeFoodItem(req, res) {
  try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, (err) => {}); // remove image from uploads folder

    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed succesfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: "Error in removing food item" });
  }
}

export { addFoodItem, listFoodItems, removeFoodItem };
