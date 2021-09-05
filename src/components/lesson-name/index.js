import { React, useState} from "react";
import { Input } from "antd";
import "./lesson-title.sass";

const LessonName = () => {
	const [editable, setEditable] = useState(false);
	const [name, setName] = useState("Untitled");

	const setLessonName = (e) => {
		if (e.target.value.length > 0) {
			setName(e.target.value);
			setEditable(false);
		}

		if (e.target.value.length === 0) {
			setName(name);
			setEditable(false);
		}
	};

	const lessonName = !editable ? (
		<h2 className="lesson-title" onClick={() => setEditable(true)}>
			{name}
		</h2>
	) : (
		<Input 
			className="inputName"
			placeholder={name}
			onPressEnter={(e) => {
				setLessonName(e);
			}}
			onBlur={(e) => setLessonName(e)}
		/>
	);

	return <> {lessonName}</>
};

export default LessonName;
