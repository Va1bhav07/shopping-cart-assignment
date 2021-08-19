import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import im from "../../../static/images/products/fruit-n-veg/apple.jpg";
import "./cardStyle.scss";

function Card(props) {
  const { cardData } = props;
  return (
    <div className="main-card">
      <h3>{cardData.name}</h3>
      <img src={im} alt="product-img" width="175px" />
      <div>
        <p className="main-card-description">{cardData.description}</p>
      </div>
      <div className="main-card-pay">
        <p className="main-card-pay-price"> MRP Rs.{cardData.price}</p>
        <PrimaryButton className="main-card-pay-btn" label="Buy Now" />
      </div>
    </div>
  );
}

export default Card;
