import {React, useState, useEffect}    from 'react'
import LessonList from '../lesson-list';
import LessonName from '../lesson-name'


const LessonLayout = ()=>{

return (
    <>
<LessonName/>
<LessonList/>
</>
)
};



export default LessonLayout;

