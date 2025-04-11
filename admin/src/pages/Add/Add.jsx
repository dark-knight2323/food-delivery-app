import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const categories = ["Salad","Rolls","Desserts","Sandwich","Cake","Pure Veg","Pasta","Noodles"];

  // state variables
  const [image, setImage] = useState(null);
  const [data, setData] = useState({ // every input field data is stored in this object
    name: "",
    description: "",
    price: "",
    category: "select",
  });

  // functions
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }; // controlled input

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
        setData({
            name: "",
            description: "", 
            price: "",
            category: "Salad",
          });
          setImage(null);
          toast.success(response.data.message);
    }else {
        toast.error(response.data.message);
    }
  };


  // return ui
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* this anchor tag allows to view the image if uploaded in the new tab */}
            <a href={image ? URL.createObjectURL(image) : null} target="blank"> 
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
              />
            </a>
            {/* Image preview */}
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              {categories.map((category)=>{
                return (
                  <option value={category}>{category}</option>
                );
              })}
              {/* <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option> */}
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹20"
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
