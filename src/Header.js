import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header"> 
      <Link to="/">
        <img
          className="header__logo"
          src="https://pkart.in/wp-content/uploads/2021/07/FINAL-1-1.png"
          width="100"
          height="200"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& order</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
