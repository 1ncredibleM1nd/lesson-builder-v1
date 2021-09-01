import React from 'react'
import './navbar.sass'
import { PageHeader, Button } from 'antd';


const Navbar =()=>{

return(
    <PageHeader
    className="site-page-header lesson-header"
    title="Prodamus"
    extra={[
      
      <Button key="1" ghost className='btn-enter'>
        Войти
      </Button>,
    ]}
  />   
)

}


export default Navbar