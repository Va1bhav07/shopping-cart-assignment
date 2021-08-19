import React from "react";
import Card from "../../components/Card";

function ProductList(props) {
  const { productData } = props;
  // console.log(productData);

  return (
    <div className="main-products-list">
      {React.Children.toArray(
        productData?.map((item) => <Card cardData={item} />)
      )}
    </div>
  );
}

export default ProductList;
