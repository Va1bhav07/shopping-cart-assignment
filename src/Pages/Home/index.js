import React, { useEffect } from "react";
import Categories from "./Categories";
import { connect } from "react-redux";
import { getBanner, getCategories } from "../../../Store/Actions/homeActions";

function Home(props) {
  const { getBanner, getCategories, bannerData, categoriesData } = props;

  useEffect(() => {
    bannerData?.length || getBanner();
    categoriesData?.length || getCategories();
  }, []);

  return (
    <div className="container">
      This is Home
      <Categories categoriesData={categoriesData} />
    </div>
  );
}
const mapStateToProps = ({ homeReducer }) => {
  return {
    bannerData: homeReducer.bannerData,
    categoriesData: homeReducer.categoriesData,
  };
};
export default connect(mapStateToProps, { getBanner, getCategories })(Home);
