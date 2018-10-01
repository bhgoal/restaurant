import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
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
    var styledMapType = new window.google.maps.StyledMapType(
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
      {name: 'Styled Map'});
        var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.521, lng: -122.684},
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
        var marker = new window.google.maps.Marker({position: {lat: 45.521, lng: -122.684}, map: map});
      map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
  }

  render() {
    return (

<main>

    <Carousel />
    <Button />




    <section id="sectionMenu">
        <div className="row">
            <div className="col-lg-12 mx-auto pb-5 px-5 sectionCol" id="aboutBox">
                <div className="row">
                    <div className="col-lg-4">
                      <div id="map" style={{height: "400px"}}></div>
                    </div>
                    <div className="col-lg-4" id="hours">
                      <h2>HOURS & LOCATION</h2>
                      <p>______<br />
                      1200 SW Morrison St,<br />Portland, OR 97205<br />503.394.3890</p>
                      <p>Mon - Thurs: 5:30 p.m. to 9:00 p.m.<br />Fri - Sat: 5:00 p.m. to 9:30 p.m.<br />Closed Sundays</p>
                    </div>
                    <div className="col-lg-4" id="about">
                    <h2>INFO</h2>
                    <p>______<br />
                    Text about the restaurant here</p>
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

export default Home;