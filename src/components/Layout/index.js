import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layoutStyle.scss";

function Layout(props) {
  //   console.log(props)
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
