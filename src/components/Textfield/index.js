import React from "react";
import "./textfield.scss";
function TextField(props) {
  const { type, label, name, onChange, value, required } = props;
  return (
    <div className="form__group">
      <input
        type={type || "text"}
        className="form__field"
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={label}
        required={required || false}
        autoComplete={"on"}
      />
      <label className="form__label">{label}</label>
    </div>
  );
}

export default TextField;
