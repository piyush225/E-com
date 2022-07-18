import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://cdn.shoplightspeed.com/shops/639914/files/28420433/holiday-sale.jpg"
            alt=""
          />
        </Link>
        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
          <div className="checkout__right">
    <Subtotal />
  </div>
        </div>
        
        </div>
      </div>
      
    
  );
}

export default Checkout;
