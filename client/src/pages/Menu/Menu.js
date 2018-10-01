import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";

class Menu extends Component {
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
  }

  render() {
    return (

<main>
    <section id="sectionMenu">
        <Hero image={"3cups.jpg"} />
        <div className="row">
            <div className="col-lg-10 project-col mx-auto sectionCol" id="workBox">
                <div className="row">
                        <h1 className="display-4 mb-5 mx-auto" style={{margin: "0.4vw"}}>Our Menu</h1>
                </div>
            </div>
        </div>
    </section>



    <Footer />
</main>
    );
  }
}

export default Menu;