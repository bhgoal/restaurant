import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import "./Hero.css";


const Hero = props => {

	let images = {};
		let r = require.context('./images', false, /\.(png|jpe?g|svg)$/);
		console.log(r(r.keys()[0]));
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		console.log(images);

	let imageUrl = images[props.image];

	return (
		<CSSTransitionGroup
		transitionName="hero"
		transitionAppear={true}
		transitionAppearTimeout={700}>
			<div style={{height: "100vh", background: `url('${imageUrl}') center/cover`}}>
	  		</div>
		</CSSTransitionGroup>

	)
};
  

export default Hero;