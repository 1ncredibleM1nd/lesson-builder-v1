import {React, useState} from 'react'
import ProdamusContext from '../context';
import {Button} from 'antd'
import {EditOutlined,DeleteOutlined  } from '@ant-design/icons'

const Editor = (WrappedBlock,type) => {
	const [url, setUrl] = useState("");

	return (
		<ProdamusContext.Consumer>
      {(editing)=>{

        const editingContent =!editing? <div className="wrapper">
			  <WrappedBlock propText={url} />
			  <Button primary><EditOutlined/></Button>
              <Button danger><DeleteOutlined/></Button>
		</div> : null ;
      const previewContent = editing? <WrappedBlock propText={url} /> : null;
    return (
       <>{previewContent}
       {editingContent}</>
    )
      }}
    </ProdamusContext.Consumer>
    );
};


export default Editor