import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <div>
      <div style={{ width: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "right" }}>
          <span>
            <a href="#">회원가입 </a>
            <a href="#">로그인 </a>
            <a href="#">언어선택</a>
          </span>
        </div>
        <div className="logo">
          <Link to="/list">
            <img src="#" alt="이미지" />
          </Link>
        </div>
        <div>
          <input className="searchBox"></input>
        </div>
        <div>메뉴 박스</div>
      </div>

      {/* <Link to="/list">List</Link> */}
    </div>
  );
}

export default LandingPage;
