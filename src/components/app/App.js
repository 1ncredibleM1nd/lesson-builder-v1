
import Navbar from "../navbar";
import {Row,Col, Button} from 'antd'
import SideBar from "../sidebar";
import LessonName from "../lesson-name";
import LessonTitle from "../title";

import './app.sass'
import ProdSlider from "../slider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Row>
      <Col span={4}>
      <Button type="primary">Создать урок</Button>
        <SideBar/></Col>
      <Col span={20}><LessonName/>
      <LessonTitle/>
      <ProdSlider/>
      
      </Col>
      
    </Row>
        
        
        
         
      </header>
    </div>
  );
}

export default App;
