import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

function List({url}) {
  // state variables
  const [list, setList] = useState([]); // list of data

  // functions
  async function fetchList() {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error in fetching data");
    }
  }

  async function removeFoodItem(foodId) {
    const response = await axios.post(`${url}/api/food/remove`,{id : foodId});
    if(response.data.success) {
      toast.success("Food Item Removed");
    }else {
      toast.error("Error in removing food item");
    }
    await fetchList();
  }

  useEffect(() => {
    fetchList();
  }, []);

  // retunring ui
  return (
    <div className="list add flex-col">
      <p>All Food Items List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFoodItem(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
