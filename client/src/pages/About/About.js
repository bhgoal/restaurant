import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";

class About extends Component {
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
    <section style={{background: `url(https://loremflickr.com/g/1920/1080/food)`, backgroundSize: "cover"}} id="sectionMenu">
        <div className="row">
            <div className="col-lg-10 mx-auto pb-5 px-5 sectionCol" id="aboutBox" style={{background: "rgba(255,255,255,0.8)"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="display-4 my-4 text-center">About Me</h1>
                        <hr className="mb-5" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div id="map" style={{height: "100%"}}></div>
                    </div>
                    <div className="col-lg-8" id="biography">
                        <p>Hello, I am Bernard! I'm a full stack web developer who seeks to build user-oriented apps focused on both aesthetics and practicality. I previously helped develop a restaurant startup from a small food truck into a successful brick and mortar. Now I use principles taken from my business experience to guide my goals as a developer.</p>
                        <ul>
                            <li>User-Focused Results — Improve user experience by recognizing their needs and tailoring the product to match.</li>
                            <li>Seamless Teamwork Integration — Whether in the kitchen or on a dev team, understand others’ workflows and how to efficiently integrate my own.</li>
                            <li>Constant Quest for Growth and Success — Seek out new knowledge and alternative strategies. Build my abilities in order to build a more effective, successful product.</li>
                            </ul>
                        <p>I write code using:</p>
                        <ul>
                            <li>HTML, CSS, Javascript, jQuery</li>
                            <li>React, Handlebars, Bootstrap, Materialize</li>
                            <li>Node.js, Express, MongoDB, MySQL</li>
                        </ul>
                            
                        <p>As someone who has been fascinated by computers and the internet since a young age, learning how websites function and how to create my own were a natural development for me. Creation and tinkering have always been interests of mine, as is apparent in the hobbies I've enjoyed over the years, which include RC cars, building computers, and working on cars.</p>
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

export default About;