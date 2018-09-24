import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
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
    <section className="section static" style={{background: `url(https://loremflickr.com/g/1920/1080/food)`, backgroundSize: "cover"}} id="sectionMenu">
        <div className="row">
            <div className="col-lg-10 project-col mx-auto sectionCol" id="workBox">
                <div className="row">
                        <h1 className="display-4 mb-5 mx-auto" style={{margin: "0.4vw"}}>Menu</h1>
                </div>
                <div className="row">
                    <div className="col-lg-7 project-col">
                        <div className="img-panel project" style={{backgroundImage: `url(${window.location.origin}/images/coffeeShopSim.png);`}}>
                            <div className="panelCaption">
                                <div className="pCenter">
                                    <p style={{fontSize: "1.25em"}}>Coffee Shop Simulator</p>
                                    <p className="projectDesc">An interactive game of coffee drink building, utilizing the MERN stack.</p>
                                    <nav className="cl-effect-4 mt-4"><a href="https://coffee-shop-sim.herokuapp.com">View Project</a><a href="https://github.com/bhgoal/coffee-shop-sim">View GitHub</a></nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 project-col">
                        <div className="img-panel project sq" style={{backgroundImage: `url(${window.location.origin}/images/hangman.png);`}}>
                            <div className="panelCaption">
                                <div className="pCenter">
                                    <p style={{fontSize: "1.25em"}}>Ice Cream Hangman</p>
                                    <p className="projectDesc">A vanilla Javascript take on a classNameic.</p>
                                    <nav className="cl-effect-4 mt-4"><a href="https://bhgoal.github.io/Word-Guess-Game">View Project</a><a href="https://github.com/bhgoal/Word-Guess-Game">View GitHub</a></nav>
                                </div>
                            </div>
                        </div>
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

export default Menu;