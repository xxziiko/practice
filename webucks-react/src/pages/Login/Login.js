import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginComponent() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate("/List");
  };
  return (
    <div>
      <div className="container">
        <div className="loginArea">
          <img src="/images/WeBucks.png" alt="" />
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
          <button className="btn" onClick={goToList}>
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
