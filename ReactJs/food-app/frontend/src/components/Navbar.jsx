import React, { useState } from "react";
import { assets } from "../assets/assets";

export const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={assets.logo} alt="Logo" width="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={()=>setMenu("home")}>
              <a className={menu === "home" ? "nav-link active" : "nav-link"} href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={()=>setMenu("about")}>
              <a className={menu === "about" ? "nav-link active" : "nav-link"} href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown" onClick={()=>setMenu("menu")}>
              <a className={menu === "menu" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
                href="#" data-bs-toggle="dropdown" >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item" onClick={()=>setMenu("contact")}>
              <a className={menu === "contact" ? "nav-link active" : "nav-link"} href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div> 
        <button onClick={()=>setShowLogin(true)} data-bs-toggle="modal" data-bs-target="#loginModal" type="button" className="btn btn-sm btn-dark rounded-pill">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
