import { React, useState} from "react";
import {v4 as  uuidv4} from 'uuid' // Library for generation unique id
import { Col, Row } from "antd";
import BlockGenerator from "../block-generator";
import Editor from "../editor";
import LessonTitle from "../blocks/lesson-title";
import VideoBlock from "../blocks/video";
import ImageBlock from "../blocks/image-block";
import TextBlock from "../blocks/text-block";
import SliderBlock from "../blocks/slider-block"
import TitleBlock from '../blocks/lesson-title'
import AudioBlock from "../blocks/audio-block";
import FileBlock from '../blocks/file-block'
import './lesson-list.sass'


const LessonList = () => {
	const [blocks, setBlocks] = useState([]);
	// Loop through all types of blocks in response to a button press
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
    
	// Problems with send function as a prop


	// const deleteData =(id)=>{
	// 	console.log (id)
	// }
	// const deleteItem =(id)=>{
	// 	const index =  blocks.findIndex(elem=>elem.id===id)
	// 	const newBlocks= [...blocks.slice(0,index), ...blocks.slice(index+1)]
	// 	setBlocks(newBlocks);
	// }
	const blockList = blocks.map(block=>{
		switch (block.type) {
			case 'header':
				return <Editor ><TitleBlock/></Editor>
			case 'text':
				return <Editor> <TextBlock/></Editor>	
			case 'image': 
			return <Editor><ImageBlock/></Editor>	
			case 'video':
				return <Editor><VideoBlock/></Editor>
			case 'slider':
				return <Editor><SliderBlock/></Editor>
			case 'audio':
				return <Editor><AudioBlock/></Editor>	
			case 'file':
				return <Editor><FileBlock/></Editor>				
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
					{blockList}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default LessonList;
