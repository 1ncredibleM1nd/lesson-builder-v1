import { React, useState, useEffect } from "react";
import { Carousel } from "antd";

import './slideBlock.sass'

const SliderBlock = () => {
	const contentStyle = {
		height: "400px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79",
	};

	return (
		<Carousel>
			<div>
				<h3 style={contentStyle}>1</h3>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
	);
};

export default SliderBlock;
