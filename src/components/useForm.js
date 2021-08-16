import React, { useState } from "react";

function useForm(initialFvalue) {
  const [values, setValues] = useState(initialFvalue);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return [values, setValues, onChangeHandler];
}

export default useForm;
