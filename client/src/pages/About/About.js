import React, { Component } from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

class About extends Component {
  
  componentDidMount() {
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
            <section id="sectionAbout">
                <Hero image={"interior.jpg"} />
                <div className="row">
                    <div className="col-lg-12 mx-auto pb-5 px-5 sectionCol" id="aboutBox">
                        <div className="row">
                            <div className="col-lg-6">
                                <img style={{width: "100%"}} src={window.location.origin + "/images/interior.jpg"} />
                            </div>
                            <div className="col-lg-6" id="biography">
                                <h2>ABOUT US</h2>
                                <p>______<br />Hello, we are Restaurant Name! We're a trendy restaurant in a hip part of town. We serve food, beverages, and other consumable things. From our beginnings in founding year here, we've focused on delivering a unique experience to each of our customers.</p>
                                <ul>
                                    <li>Quality Ingredients — Freshness. Farm to table. Small-batch. Artisan crafted. Responsibly sourced.</li>
                                    <li>Aesthetics — Antique looking light bulbs. Lots of mason jars. Serving things on a wooden plank. </li>
                                    <li>Community — Live music on weekends. Probably some cornhole boards. Ridiculous presence on Instagram.</li>
                                    </ul>
                                <p>Swing on by and check us out!</p>
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

export default About;