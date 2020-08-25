import React, { useState } from "react";

function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const setFormState = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const Login = (e) => {
    e.preventDefault();
    console.log(user);
    setLoginUser(user);
  };

  return (
    <form>
      <input
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setFormState(e)}
      ></input>

      <input
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setFormState(e)}
      ></input>

      <button onClick={(e) => Login(e)}>Login</button>
    </form>
  );
}

export default Login;
