import LessonList from "../../lesson-list";
import LessonName from "../../lesson-name";
import HeaderLayout from "../header-layout";
import { Button, Modal, Space } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
import ProdamusContext from "../../context";

const LessonLayout = () => {
	const [editor, setEditor] = useState(false);

	//use Hook for switching Mode editor/preview
	const setMode = () => {
		if (editor) {
			setEditor(false);
		} else setEditor(true);
	};

	//Methods for working with Form (when server will be ready correct Text and methods of buttons)

	function error() {
		Modal.error({
			title: "Сохранение невозможно",
			content:
				"В текущей реализации сервер недоступен, по этой причине невозможно провести сохранение, но мы трудимся над новым функционалом",
		});
	}

	return (
		<>
			<ProdamusContext.Provider value={editor}>                              {/* Now context send mode to components, but it can be used for transmit server to deep components*/}
				<HeaderLayout>
					<LessonName />
					<Button ghost onClick={() => setMode()} className="preview">
						Предпросмотр
					</Button>
					<Space>                                     {/*Space can be deleted when server will start*/}
						<Button
							onClick={error}
							type="primary"
							className="green"
							shape="circle">
							<SaveOutlined />
						</Button>
					</Space>            
				</HeaderLayout>
				<LessonList />
			</ProdamusContext.Provider>
		</>
	);
};

export default LessonLayout;
