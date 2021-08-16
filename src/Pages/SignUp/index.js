import React from "react";
import TextField from "../../components/Textfield";
import PrimaryButton from "../../components/Button/PrimaryButton";
import useForm from "../../components/useForm";
function SignUp() {
  const [values, setValues, onChangeHandler] = useForm({});
  // useEffect(() => {
  //   console.log(values);
  // }, [values]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="container main-login">
      <div className="main-login-text">
        <h1>Signup</h1>
        <p>We dont share your personal details with anyone.</p>
      </div>
      <form className="main-login-form" onSubmit={onSubmitHandler}>
        <TextField
          name="fname"
          label="First Name"
          onChange={onChangeHandler}
          required
        />
        <TextField
          name="lname"
          label="Last Name"
          onChange={onChangeHandler}
          required
        />
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
        <TextField
          name="cpassword"
          label="Confirm"
          onChange={onChangeHandler}
          required
        />
        <PrimaryButton
          type="submit"
          className="main-login-form-login-btn"
          label="Signup"
        />
      </form>
    </div>
  );
}

export default SignUp;
