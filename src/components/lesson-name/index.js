import  {React ,useState,useEffect} from 'react'
import { Input } from 'antd';
import './lesson-title.sass'

const LessonName = (name)=>{



    const [editable, setEditable]= useState(false);
    const lessonName = !editable ?  <h2 className='lesson-title'onClick={()=>setEditable(true)}>Lesson 1</h2> :
     <Input className='inputName' size="big" placeholder="Введите название урока" onPressEnter={()=>{setEditable(false)}}/>
    
    
    return (
        <div className='title-container'>
           {lessonName}
         
        </div>
    )
}


export default LessonName;