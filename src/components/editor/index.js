import { React, useState } from "react";
import ProdamusContext from "../context";
import { Button, Row, Col, Popconfirm, message } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./editor.sass";


const Editor = (props) => {



	const first = <Row className="editing-block" justify="space-between" align="middle">
			<Col span={18}>{props.children}</Col>
			<Col order={1} span={2}>
				<Button primary>
					<EditOutlined />
				</Button>
				<Button danger>
					<DeleteOutlined/>
				</Button>
			</Col>
		</Row>
	
	const second =<div className='preview-wrapper'>{props.children}</div> 

	return (
		<ProdamusContext.Consumer>
			{(editing) => {
				const editingContent = !editing ? first : null;
				const previewContent = editing ? second : null;
				return (
					<>
						{editingContent}
						{previewContent}
					</>
				);
			}}
		</ProdamusContext.Consumer>
	);
};

export default Editor;
