import { Col, Row } from "antd";
import { React, useState,useEffect } from "react";
import ModalCreator from "../modal-creator";
import ReactPlayer from "react-player";
import Title from "../title";
const LessonList = () => {
	const [blocks, setBlocks] = useState([]);



	const createBlocks = (type) => {
		switch (type) {
			case "header":
				
				break;
			case "text":
				
				break;
			default:
				throw Error("Element unknown");
		}
	};
	
	// const lessonBlocks = blocks.map(block=>{
	// 	if(block.type==='header'){
	// 		return <Title/>
	// 	}
	// })

	return (
		<Row>
			<Col span={18} offset={3}>
				<Row justify="center">
					<ModalCreator createBlocks={createBlocks} />
					{/* {lessonBlocks}	 */}
				</Row>
			</Col>
		</Row>
	);
};

export default LessonList;
