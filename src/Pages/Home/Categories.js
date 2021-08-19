import React from "react";
import logi from "../../../static/images/category/fruits.png";
import PrimaryButton from "../../../src/components/Button/PrimaryButton";
import { withRouter } from "react-router-dom";
import "./homeStyle.scss";

function Categories(props) {
  const { categoriesData, history } = props;

  const onClickHandler = (selectedCategory) => {
    history.push({
      pathname: "/products",
      state: { selectedCategory },
    });
  };

  return (
    <div className="main-categories">
      {React.Children.toArray(
        categoriesData?.map((item) => (
          <div className="main-categories-items">
            <img src={item.imageUrl} alt={item.key} width="300" />
            <div className="main-categories-text">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <PrimaryButton
                type="submit"
                className="main-categories-btn"
                label={"Explore " + item.key}
                onClick={() => onClickHandler({ id: item.id, name: item.name })}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default withRouter(Categories);
