import React from "react";
import logi from "../../../static/images/category/fruits.png";
import PrimaryButton from "../../../src/components/Button/PrimaryButton";
import "./homeStyle.scss";

function Categories(props) {
  const { categoriesData } = props;
  // console.log("categoriesData", categoriesData);

  const onClickHandler = () => {
    console.log("hell");
  };

  return (
    <div className="main-categories">
      {React.Children.toArray(
        categoriesData
          ?.sort((a, b) => a.order - b.order)
          .filter((item) => item.enabled)
          .map((item) => (
            <div className="main-categories-items">
              <img src={item.imageUrl} alt="category-img" width="300" />
              <div className="main-categories-text">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <PrimaryButton
                  type="submit"
                  className="main-categories-btn"
                  label={"Explore " + item.key}
                  onClick={onClickHandler}
                />
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default Categories;
