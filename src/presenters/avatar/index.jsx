import React from 'react'
import './index.css'

const Avatar = ({
    src,
    alt,
    size="auto",
    style
}) => {

    return <img className='avatar' src={src} alt={alt} style={style}/>

}

export default Avatar;