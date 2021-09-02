import {React,useState} from 'react'
import { Button,Row } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import './modal-creator.sass'

const ModalCreator =()=>{

const [choice, setChoice]= useState(false)
const buttonPlus =  <Button type="primary" shape="round" icon={<PlusOutlined />}/>

return (
    <>
       {buttonPlus}
       </>
)

}


export default ModalCreator