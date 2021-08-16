import React from "react";
import "./ButtonStyle.scss";

function PrimaryButton(props) {
  const { label, className, type } = props;
  return (
    <button type={type} className={`${className} primaryBtn`}>
      {label}
    </button>
  );
}

export default PrimaryButton;
