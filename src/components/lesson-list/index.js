import { Col, Row } from "antd";
import React from "react";
import ModalCreator from "../modal-creator";
import ReactPlayer from "react-player";

const LessonList = () => {
	return (
		<Row>
			<Col span={18} offset={3}>
				<Row justify="center">
					<ModalCreator />
				</Row>
			</Col>
		</Row>
	);
};

export default LessonList;
