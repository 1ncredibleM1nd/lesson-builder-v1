import { React, useState } from "react";
import { Button, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./modal-creator.sass";

const ModalCreator = () => {
	const [cardList, setCardList] = useState([
		{ id: 1, type: "header", text: "Заголовок" },
		{ id: 2, type: "text", text: "Текст" },
		{ id: 3, type: "image", text: "Картинка" },
		{ id: 4, type: "slider", text: "Слайдер" },
		{ id: 5, type: "audio", text: "Аудио" },
		{ id: 6, type: "file", text: "Файл" },
		{ id: 7, type: "video", text: "Видео" },
	]);
	const [choice, setChoice] = useState(false);
	const buttonPlus = !choice ? (
		<Button
			type="primary"
			shape="round"
			onClick={() => setChoice(true)}
			icon={<PlusOutlined />}
		/>
	) : null;
	const choicePanel = choice ? (
		<Row>
			{" "}
			{cardList.map((card) => (
				<Button key={card.id} type="primary" onClick>
					{card.text}
				</Button>
			))}
		</Row>
	) : null;

	return (
		<>
			{buttonPlus}
			{choicePanel}
		</>
	);
};

export default ModalCreator;
