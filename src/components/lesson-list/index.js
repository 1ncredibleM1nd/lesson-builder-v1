import { React, useState} from "react";
import {v4 as  uuidv4} from 'uuid'
import { Col, Row } from "antd";

import BlockGenerator from "../block-generator";
import Editor from "../editor";
import LessonTitle from "../blocks/lesson-title";
import VideoBlock from "../blocks/video";
import TextBlock from "../blocks/text-block";
import SliderBlock from "../blocks/slider-block"
import TitleBlock from '../blocks/lesson-title'
import './lesson-list.sass'

const LessonList = () => {
	const [blocks, setBlocks] = useState([]);


	const createBlocks = (type) => {
		switch (type) {
			case "header":
				const updateWithNewHeader=[
					...blocks,
					{
						id: uuidv4(),
						type:'header',
						content:'Новый заголовок'
					}
				];
				setBlocks(updateWithNewHeader);
				break;
			case "text":
				const updateWithNewText=[
					...blocks,
					{
						id: uuidv4(),
						type:'text',
						content:'Новый заголовок'
					}
				];
				setBlocks(updateWithNewText);
				
				break;
			case 'slider':
				const updateWithNewSlider=[
					...blocks,
					{
						id: uuidv4(),
						type:'slider',
						content:['url1','url2','url3']
					}
				];
				setBlocks(updateWithNewSlider);
				break;
			case 'image':
				const updateWithNewImage=[
					...blocks,
					{
						id: uuidv4(),
						type:'image',
						content: 'url'
					}
				];
				setBlocks(updateWithNewImage);
				break;
			case 'video':
				const updateWithNewVideo=[
					...blocks,
					{
						id: uuidv4(),
						type:'video',
						content: 'url'
					}
				];
				setBlocks(updateWithNewVideo);
				break;
			case 'file':
				const updateWithNewFile=[
					...blocks,
					{
						id: uuidv4(),
						type:'file',
						content: 'url'
					}
				];
				setBlocks(updateWithNewFile);
				break;
			case 'audio':
				const updateWithNewAudio=[
					...blocks,
					{
						id: uuidv4(),
						type:'audio',
						content: 'audio'
					}
				];
				setBlocks(updateWithNewAudio);
				break;		
			default:
				throw Error("Element unknown");
		}
	};
	const testBlock = blocks.map(block=>{
		switch (block.type) {
			case 'header':
				return Editor(TitleBlock)
				break;
			default:
				break;
		}
	})
	
	
	return (
		<Row className='lessonlist-layout'>
			<Col span={20} offset={2}>
				<Row  justify="center">
				<BlockGenerator createBlocks={createBlocks} />
				</Row>
				<Row justify='center'>
					<Col span={18}>
					{/* {titleBlock}
					{textBlock}
					{videoBlock}
					{sliderBlock} */}
					{testBlock}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default LessonList;
