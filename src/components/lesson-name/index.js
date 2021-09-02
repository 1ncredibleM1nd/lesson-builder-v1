import  {React ,useState,useEffect} from 'react'
import { Input } from 'antd';
import './lesson-title.sass'

const LessonName = ()=>{



    const [editable, setEditable]= useState(false);
    const [name, setName] = useState('Untitled');
    
    const setLessonName = (e)=>{

        setName(e.target.value)
        setEditable(false)
    }

    
    const lessonName = !editable ?  <h2 className='lesson-title'onClick={()=>setEditable(true)}>{name}</h2> :
     <Input className='inputName' size="big" placeholder="Новое название" onPressEnter={(e)=> {setLessonName(e)}}/>
    
    
    return (
        <div className='title-container'>
           {lessonName}
         
        </div>
    )
}


export default LessonName;