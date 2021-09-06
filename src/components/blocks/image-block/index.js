import {React , useState, useEffect} from 'react'
import { Image } from 'antd'

const ImageBlock =({src})=>{

    return(
        <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    )

}

export default ImageBlock;