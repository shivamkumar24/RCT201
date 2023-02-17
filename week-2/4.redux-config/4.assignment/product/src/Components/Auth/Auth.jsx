import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailures,
} from "../../Redux/Auth/auth.actions";

const Auth = () => {
  const checkLogin = () => {
    axios.get(`https://reqres.in/api/login`);
  };

  return (
    <div>
      <input type="text" placeholder="email" value="" />
      <input type="text" placeholder="password" value="" />
      <button>Login</button>
    </div>
  );
};

export default Auth;
