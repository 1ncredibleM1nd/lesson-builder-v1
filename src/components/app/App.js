import {React, useState} from 'react'
import Navbar from "../navbar";
import {Row,Col, Button} from 'antd'
import LessonLayout from '../lessonLayout';
import './app.sass'


function App() {

  const [lessonCreated, setCreate] = useState(false)


  const buttonCreate = !lessonCreated ?
   <Row justify='center'><Button type="primary" onClick={()=>{setCreate(true)}}>Создать урок</Button></Row> : null
  
   const lessonLayout = lessonCreated ? <LessonLayout/> : null


  return (
    <div className="App">
      <header className="App-header">
        </header>
      <Navbar/>
      <Row>
      <Col span={24}>
        {buttonCreate}
       {lessonLayout}
      </Col>
    </Row>
        
        
        
      
    </div>
  );
}

export default App;
