import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "../../Firebase/Firebase";
import "./Login.css";
import Container from "../Counter/Container";


const Login = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      {value ? (
        <Container />
      ) : (
        <div className="login_container">
          <h3>Pomodro timer app</h3>
          <h3>Click Here To Login 👇🏻</h3>
          <div
            id="click_to_login_button"
            onClick={() => {
              signInWithGoogle(setValue);
            }}
          >
            <div className="logo_container">
              <i class="fa-brands fa-google" style={{ color: "#ffffff" }}></i>
            </div>
            <div className="text_container">
              <h4>Login With Google</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
