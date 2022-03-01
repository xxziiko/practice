import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function LoginComponent() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <img src="/images/WeBucks.png" alt="" width="300" />
        </div>
        <div className="loginArea" action="./list.html">
          <input
            className="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputPassword"
            type="password"
            placeholder="비밀번호"
          />
          <button className="btn" onClick={() => {}} disabled>
            로그인
          </button>
          <Link to="/signup" className="find-password" href="">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
