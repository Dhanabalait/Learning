import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <div className="container">
        <h2>Top dishes near you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet
          repellendus ex debitis nulla voluptas, iure enim ducimus. Iure
          provident dignissimos excepturi repudiandae velit tempore ipsum ex
          exercitationem qui molestiae.
        </p>
        <div className="food-display-list mt-4">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
