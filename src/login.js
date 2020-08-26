import React from "react";
import { useForm } from "./customhooks/useForm";

function Login({ setLoginUser }) {
  const [user, setUser] = useForm({
    firstName: "",
    lastName: "",
  });

  //   const setFormState = (e) => {
  //     const { name, value } = e.target;
  //     setUser((prev) => {
  //       return {
  //         ...user,
  //         [name]: value,
  //       };
  //     });
  //   };

  const Login = (e) => {
    e.preventDefault();
    setLoginUser(user);
  };

  return (
    <form>
      <input
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={setUser}
      ></input>

      <input
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={setUser}
      ></input>

      <button onClick={(e) => Login(e)}>Login</button>
    </form>
  );
}

export default Login;
