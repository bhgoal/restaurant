import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./Nav.css";



class Nav extends Component {
  state = {
    multiplier: 1
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var height = window.scrollY;
    console.log(height);
    this.getMultiplier(height, 50, 300);
  }

  getMultiplier = (height, rangeMin, rangeMax) => {
    var multiplier = (rangeMax - height) / (rangeMax - rangeMin);
    if (height < rangeMin) {
      multiplier = 1;
    }
    if (height > rangeMax) {
      multiplier = 0;
    }
    this.setState({multiplier: multiplier});
    this.changeNav(multiplier);
  }

  changeNav = (multiplier) => {
    var color = Math.floor((multiplier) * 255);
    var textOpacity = (0.2 * multiplier) + 0.3;
    // $("#mainNav").css("background", `rgba(24, 24, 24, ${opacity})`);
    // $("a.nav-link.active").css("color", `rgb(${color}, ${color}, ${color})`);
    // $("a.nav-link").not(".active").css("color", `rgba(${color}, ${color}, ${color}, ${textOpacity})`);
    // $("#homeArrow").css("opacity", `${opacity}`);
    // if (opacity < 0.1) {
    //   $("a.navbar-brand").css("visibility", "hidden");
    // } else {
    //   $("a.navbar-brand").css("visibility", "visible");
    // }
  }

  // forceNav(opacity) {
  //   $("#mainNav").css("background", `rgba(24, 24, 24, ${opacity})`);
  //   // navForced = true;
  // }

  render() {

    let navlinkStyle = null;
    //old style {opacity: `${(0.2 * this.state.multiplier) + 0.3}`}

    let navVisibility = (this.state.multiplier < 0.1) ? "none" : "flex";
    console.log(navVisibility);

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light navGradient" id="mainNav" style={{display: navVisibility, height: "200px", opacity: `${this.state.multiplier}`}}>
        <a className="navbar-brand p-0 ml-5" href="#pageTop" id="navbarBrand"><h1 id="nameHeader" style={{fontWeight: "400"}}><i className="fas fa-angle-double-up" id="homeArrow"></i></h1></a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto mr-2" style={{marginBottom: "140px"}}>
              <NavLink exact id="navHome" className="nav-item nav-link" to="/" activeClassName="active">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/menu" style={navlinkStyle} activeClassName="active">Menu</NavLink>
              <NavLink className="nav-item nav-link" to="/about" style={navlinkStyle}activeClassName="active">About</NavLink>
              <NavLink className="nav-item nav-link" to="/social" style={navlinkStyle}activeClassName="active">Social</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
