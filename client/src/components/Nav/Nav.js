import React from "react";
import "./Nav.css";



const Nav = props => (

  <nav className="navbar fixed-top navbar-expand-lg navbar-dark mb-5" id="mainNav">
    <a className="navbar-brand p-0 ml-5" href="#pageTop" id="navbarBrand"><h1 id="nameHeader" style={{fontWeight: "400"}}><i className="fas fa-angle-double-up" id="homeArrow"></i></h1></a>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav ml-auto mr-2">
          <a id="navHome" className="nav-item nav-link active" href="/">Home</a>
          <a className="nav-item nav-link" href="/about">About</a>
          <a className="nav-item nav-link" href="/menu">Menu</a>
          <a className="nav-item nav-link" href="/social">Social</a>
      </div>
    </div>
  </nav>
);

export default Nav;
