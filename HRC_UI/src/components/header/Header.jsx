import React from "react";
import logo from "./logo.svg";
import Logo1 from "./Logo1.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="logo">
        <div className="logoF">
          <img src={Logo1} alt="" />
        </div>
        <div className="logoS">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="invoice">Invoice List</div>
    </>
  );
}

export default Header;