import { React, useState } from "react";
import Navbar from "../navbar";
import { Row, Col, Button, BackTop } from "antd";
import LessonLayout from "../layouts/lessonLayout";
import "./app.sass";
import { Footer } from "antd/lib/layout/layout";


function App() {
	const [lessonCreated, setCreate] = useState(false);

	const buttonCreate = !lessonCreated ? (
		<Row justify="center">
			<Button
				className='prodamus-btn btn-create'
				type="primary"
				onClick={() => {
					setCreate(true);
				}}>
				Создать урок
			</Button>
		</Row>
	) : null;

	const lessonLayout = lessonCreated ? <LessonLayout /> : null;

	return (
		<div className="App">
			<header className="App-header"></header>
			<Navbar />
			<Row>
				<Col span={24}>
					{buttonCreate}
					{lessonLayout}

				</Col>
			</Row>
			<BackTop>
      <div className="ant-back-top-inner">Вверх</div>
    </BackTop>
		
		</div>
	);
}

export default App;
