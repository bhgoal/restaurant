import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";

class Social extends Component {
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

    <section style={{background: `url(https://loremflickr.com/g/1920/1080/food)`, backgroundSize: "cover"}} id="sectionSocial">
        <div className="row">
            <div className="col-lg-10 mx-auto pb-5 px-5 border sectionCol" id="contactBox">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="display-4 my-4 text-center">Contact Me</h1>
                        <hr className="mb-5" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-12 contactRow">
                        Feel free to reach me through LinkedIn or email, or check out my GitHub!<br />
                        I would love to get in contact with you!<br />
                        <nav className="cl-effect-4 mt-4 contactNav">
                        <a href="https://www.linkedin.com/in/bernard-goal-34018068/"><i className="fab fa-linkedin"></i>
                            LinkedIn</a>
                        <a href="https://www.github.com/bhgoal"><i className="fab fa-github-square"></i>
                            GitHub</a>
                        <a href="mailto:bernard.goal@gmail.com?subject=Hi Bernard!"><i className="fas fa-envelope-square"></i>
                            Email Me</a></nav>
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

export default Social;