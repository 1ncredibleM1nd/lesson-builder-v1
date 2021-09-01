import {React, useState, useEffect } from 'react'
import { List } from 'antd'
import './sidebar.sass'
const SideBar = ()=>{

    const data = [
        'Lesson 1.',
        'Lesson 2.',
        'Lesson 3.',
        'Lesson 4.',
        'Lesson 5.',
      ];

return(
    <div className='sidebar'>
        <List
      size="large"
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />

    </div>
)

}


export default SideBar;