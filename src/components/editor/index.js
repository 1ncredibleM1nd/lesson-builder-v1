import { React, useState } from "react";
import ProdamusContext from "../context";
import { Button, Row, Col, Popconfirm, message  } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./editor.sass";

const Editor = (WrappedBlock, type) => {
	
  function confirm(e) {
    
    message.success('Блок успешно удалён');
  }
  
 // If you have time, maybe you can do Layout for this Block  

	return (
		<ProdamusContext.Consumer>
			{(editing) => {
				const editingContent = !editing ? (
					<Row className="editing-block" justify="space-between" align="middle">
						<Col span={18}>
							<WrappedBlock  />
						</Col>
						<Col order={1} span={2}>
							<Button primary>
								<EditOutlined />
							</Button>
              <Popconfirm title="Вы уверены, что хотите удалить блок?" onConfirm={confirm}  okText="Да" cancelText="Нет">
							<Button danger>
								<DeleteOutlined />
							</Button>
              </Popconfirm>
						</Col>
					</Row>
				) : null;
				const previewContent = editing ? <WrappedBlock  /> : null;
				return (
					<>
						{previewContent}
						{editingContent}
					</>
				);
			}}
		</ProdamusContext.Consumer>
	);
};

export default Editor;
