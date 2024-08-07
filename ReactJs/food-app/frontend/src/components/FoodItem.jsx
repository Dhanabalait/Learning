import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => { 
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img">
        <img src={image} alt="" />

        {!cartItems[id] ? 
          <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" className="add-img"
          />
        :
          <div className="item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className="remove-item" />
             <span className="item-count">{cartItems[id]}</span>
             <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className="add-item" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p className=" mb-1 fw-bold">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price mb-0">INR {price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
