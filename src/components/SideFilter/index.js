import React from "react";
import "./sideFilterStyle.scss";

function SideFilter(props) {
  // console.log(props);
  const { navData, onClickHandler, selectedCategory } = props;
  return (
    <div className="main-sideFilter">
      <ul>
        {React.Children.toArray(
          navData?.map((item) => (
            <li
              value={item.id}
              className={
                item.id === selectedCategory?.id
                  ? "main-sideFilter-active"
                  : "inactive"
              }
              onClick={() => onClickHandler(item)}
            >
              {item.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SideFilter;
