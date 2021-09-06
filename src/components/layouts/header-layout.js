import React from "react";
import { Row, Col } from "antd";
import "./header-layout.sass";
const HeaderLayout = (props) => {
	return (
		<Row className="header-layout" align="middle">
			<Col span="24">
				<Row justify="space-between">
					<Col span="2" offset="1">
						{props.children[2]}
					</Col>
					<Col span="3">{props.children[0]}</Col>
					<Col span="2" offset="1">
						{props.children[1]}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default HeaderLayout;
