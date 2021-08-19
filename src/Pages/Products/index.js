import React, { useEffect, useState } from "react";
import SideFilter from "../../components/SideFilter";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts } from "../../../Store/Actions/productActions";
import { getCategories } from "../../../Store/Actions/homeActions";
import "./productsStyle.scss";

function Products(props) {
  const {
    getProducts,
    getCategories,
    categoriesData,
    productData,
    location: { state },
    history,
  } = props;
  const [productState, setProductState] = useState([]);

  useEffect(() => {
    productData?.length || getProducts();
    categoriesData?.length || getCategories();
  }, []);

  useEffect(() => {
    setProductState(productData);
    // console.log(productState, "=========", productData);
  }, [productData.length]);

  useEffect(() => {
    const { selectedCategory } = state || {};
    console.log(state, "00000000000000000");
    selectedCategory
      ? setProductState(filterProductData(selectedCategory))
      : setProductState(productData);
  }, [state?.selectedCategory?.id]);

  console.log(props, "-------");

  const onClickHandler = (item) => {
    // console.log(item);
    // let filteredData = filterProductData(item);
    // setProductState(filteredData);
    history.push({
      pathname: "/products",
      state: { selectedCategory: item },
    });
  };

  const filterProductData = (data) => {
    return productData?.filter((value) => data.id === value.category);
  };

  return (
    <div className="container main-products">
      <SideFilter
        onClickHandler={onClickHandler}
        navData={categoriesData}
        selectedCategory={state?.selectedCategory}
      />
      <ProductList productData={productState} />
    </div>
  );
}

const mapDispatchToProps = ({ homeReducer, productReducer }) => {
  return {
    categoriesData: homeReducer.categoriesData?.map((item) => ({
      id: item.id,
      name: item.name,
    })),
    productData: productReducer.productData,
  };
};

export default connect(mapDispatchToProps, { getProducts, getCategories })(
  Products
);
