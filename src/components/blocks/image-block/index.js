import {React , useState, useEffect} from 'react'
import { Image } from 'antd'

const ImageBlock =({src})=>{

    return(
        <Image
        width={480}
        src="https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False"
      />
    )

}

export default ImageBlock;