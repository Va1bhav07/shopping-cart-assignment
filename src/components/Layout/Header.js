import React from "react";
import logo from "../../../static/images/logo.png";
import cartSvg from "../../../static/images/cart.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="main-header">
      <div className="container header-body">
        <img src={logo} alt="logo" width="175px" />
        <nav className="main-header-nav">
          <div className="main-header-nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="header-cart">
            <div className="header-cart-links">
              <Link to="/signin">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
            <div className="header-cart-box">
              <img src={cartSvg} alt="logo" width="30" color="#d00153" />
              <div>0 items</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
