import express from "express";
import { addFoodItem, listFoodItems, removeFoodItem } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/list", listFoodItems);
foodRouter.post("/remove", removeFoodItem);

export default foodRouter;
