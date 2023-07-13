import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import "../components/styles.css";
import axios from "axios";

const Login = () => {
  // const navigate = useNavigate();
  // const dispath = useDispatch();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  // const [isLogin, setIsLogin] = useState(false);
  // const changeHandler = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:5000/user/${type}`, {
        username: input.username,
        password: input.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const { username, password } = input;
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="log-in">
      <center>
        <form onSubmit={submitHandler}>
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br /> <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br /> <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default Login;
