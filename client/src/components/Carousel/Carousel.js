import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import "./Carousel.css";

let images = {};
		let r = require.context('./images', false, /\.(png|jpe?g|svg)$/);
		console.log(r(r.keys()[0]));
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		console.log(images);

let imageTimeout;
let changeStyle = "normalChange";
let changeTimeout = 2000;

class Carousel extends Component {
	state = {
		currentImage: 0
	};

	componentDidMount() {
		setTimeout(this.changeImage, 5000);
	}

	changeImage = () => {
		clearTimeout(imageTimeout);
		changeStyle = "normalChange";
		changeTimeout = 2000;
		if (this.state.currentImage === (Object.keys(images).length - 1)) {
				this.setState({currentImage: 0});
		} else {
			this.setState((prevState) => ({
				currentImage: prevState.currentImage + 1
			}));
		}
		imageTimeout = setTimeout(this.changeImage, 5000);
	}

	prevImage = () => {
		clearTimeout(imageTimeout);
		changeStyle = "fastChange";
		changeTimeout = 500;
		if (this.state.currentImage === 0) {
			this.setState({currentImage: Object.keys(images).length - 1});
		} else {
			this.setState((prevState) => ({
				currentImage: prevState.currentImage - 1
			}));
		}
		imageTimeout = setTimeout(this.changeImage, 5000);
	}

	nextImage = () => {
		clearTimeout(imageTimeout);
		changeStyle = "fastChange";
		changeTimeout = 500;
		if (this.state.currentImage === (Object.keys(images).length - 1)) {
			this.setState({currentImage: 0});
		} else {
			this.setState((prevState) => ({
				currentImage: prevState.currentImage + 1
			}));
		}
		imageTimeout = setTimeout(this.changeImage, 5000);
	}
	
  	render() {
		let currentImageUrl = Object.values(images)[this.state.currentImage];

      	return (
		  	
			<div id="carouselWrapper">
				<CSSTransitionGroup
				transitionName={changeStyle}
				transitionEnterTimeout={changeTimeout}
				transitionLeaveTimeout={changeTimeout}>
					<div key={currentImageUrl} style={{height: "100vh", width: "100vw", zIndex: "-1", position: "absolute", background: `url('${currentImageUrl}')`}}></div>
				</CSSTransitionGroup>
				<div id="prevButton" onClick={this.prevImage}></div>
				<div id="nextButton" onClick={this.nextImage} style={{right: "0"}}></div>
				<div className="container" style={{paddingTop: "240px"}}>
					<h1 className="display-1">Restaurant Name</h1>
					<hr className="my-4" />
					<p className="lead">Trendy tagline for restaurant goes here.</p>
				</div>
			</div>
      	);
	}
}
export default Carousel;