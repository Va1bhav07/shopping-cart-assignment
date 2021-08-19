import React, { useState, useEffect } from "react";
import TextField from "../../components/Textfield";
import PrimaryButton from "../../components/Button/PrimaryButton";
import useForm from "../../components/useForm";
import "./loginStyle.scss";

function Login() {
  const [values, setValues, onChangeHandler] = useForm({});
  // useEffect(() => {
  //   console.log(values);
  // }, [values]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(values);
  };
  return (
    <div className="container main-login">
      <div className="main-login-text">
        <h1>Login</h1>
        <p>Get access to your Oders, Wishlist and Recommendations</p>
      </div>
      <form className="main-login-form" onSubmit={onSubmitHandler}>
        <TextField
          name="email"
          label="Email"
          onChange={onChangeHandler}
          required
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={onChangeHandler}
        />
        <PrimaryButton
          type="submit"
          className="main-login-form-login-btn"
          label="Login"
        />
      </form>
    </div>
  );
}

export default Login;
