import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

class Social extends Component {
  state = {

  };

  render() {
    return (
        <main>
            <section id="sectionSocial">
                <Hero image={"chatting.jpg"} />
                <div className="row">
                    <div className="col-lg-10 mx-auto pb-5 px-5 border sectionCol" id="contactBox">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="display-4 my-4 text-center">Get in touch with us!</h1>
                                <hr className="mb-5" />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12 contactRow">
                                Feel free to reach out to us through social media or email.<br />
                                We would love to hear from you!<br />
                                <nav className="cl-effect-4 mt-4 contactNav">
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i>
                                    {'\u00A0'}Instagram</a>
                                <a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i>
                                    {'\u00A0'}Facebook</a>
                                <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i>
                                    {'\u00A0'}Twitter</a>
                                <a href="mailto:email@gmail.com?subject=Hi Restaurant!"><i className="fas fa-envelope-square"></i>
                                    {'\u00A0'}Email Us</a></nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
  }
}

export default Social;