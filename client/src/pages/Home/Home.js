import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";
import "./Home.css";

class Home extends Component {
  state = {
    orders: [],
    orderNum: 0,
    itemInHand: null,
    userData: null,
    currentScore: 0,
    timeRemaining: 60,
    cursorMove: false,
    mouseX: 0,
    mouseY: 0
  };
  
  componentDidMount() {
    //this.loadDrinks();
    //this.generateOrder();
    //console.log(this.state.orders);
    //setTimeout(this.getUserData, 2000);
    this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDIFYWhCc2NrSSekBoOv8FXxmDmHNgakws", this.initMap);
  }

  loadScript(url, callback){

    let script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  initMap() {
      var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      });
  }

  render() {
    return (

<main>

    <Carousel />
    <Button />




    <section className="parallax-window" data-parallax="scroll" data-image-src={window.location.origin + "/images/architecture_bg.jpg"} data-speed="0.4" id="sectionMenu">
        <div className="row">
            <div className="col-lg-10 mx-auto pb-5 px-5 sectionCol" id="aboutBox">
                <div className="row">
                    <div className="col-lg-4">
                      <div id="map" style={{height: "400px"}}></div>
                    </div>
                    <div className="col-lg-4" id="biography">
                      <h2><u>Hours and Location</u></h2>
                      <p>4500 Pacific Ave,<br />Portland, OR 48238<br />718.394.3890</p>
                      <p>Mon - Thurs: 5:30 p.m. to 9:00 p.m.<br />Fri - Sat: 5:00 p.m. to 9:30 p.m.<br />Closed Sundays</p>
                    </div>
                    <div className="col-lg-4" id="hours">
                    <h2><u>Info</u></h2>
                    <p>Text about the restaurant here</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="footer text-white text-center">
        Copyright © 2018
    </div>
</main>
    );
  }
}

export default Home;