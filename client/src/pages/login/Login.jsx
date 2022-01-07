import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import "./login.css";
import { Context } from "../../context/Context";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  let [loading, setLoading] = useState(isFetching);
  let [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });

    try {
      const res = await axios.post("auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username . . ."
          ref={userRef}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          ref={passwordRef}
        />

        <button
          className="link"
          className="loginButton"
          type="submit"
          onClick={() => setLoading(!loading)}
          disabled={username < 1}
        >
          {loading ? <ClipLoader size={20} loading={loading} /> : "Login"}
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
