import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import "./Carousel.css";

let images = {};
		let r = require.context('./images', false, /\.(png|jpe?g|svg)$/);
		console.log(r(r.keys()[0]));
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		console.log(images["beef.jpg"]);

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
				transitionAppear={true}
				transitionAppearTimeout={1000}
				transitionEnterTimeout={changeTimeout}
				transitionLeaveTimeout={changeTimeout}>
					<div key={currentImageUrl} style={{height: "100vh", width: "100vw", zIndex: "-1", position: "absolute", background: `url('${currentImageUrl}') center/cover`}}></div>
				</CSSTransitionGroup>
				<div className="prevButton" onClick={this.prevImage}><i className="arrow fas fa-chevron-circle-left"></i></div>
				<div className="nextButton" onClick={this.nextImage} style={{right: "0"}}><i className="arrow fas fa-chevron-circle-right"></i></div>
				<div style={{marginTop: "35vh", left: "0", right: "0", position: "absolute", backgroundImage: "linear-gradient(to right, rgba(255, 251, 239, 0), rgba(255, 251, 239, .7), rgba(255, 251, 239, 0))"}}>
					<div className="container mx-auto">
						<h1 className="display-1" style={{maxWidth: "1152px"}}>Restaurant Name</h1>
						<hr className="my-4" />
						<p className="lead">Trendy tagline for restaurant goes here.</p>
					</div>
				</div>
			</div>
      	);
	}
}
export default Carousel;