import React from "react";
import "./buttonStyle.scss";

function PrimaryButton(props) {
  const { label, className, type, ...others } = props;
  return (
    <button type={type} className={`${className} primaryBtn`} {...others}>
      {label}
    </button>
  );
}

export default PrimaryButton;
