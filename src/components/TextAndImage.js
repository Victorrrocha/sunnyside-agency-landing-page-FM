import React from 'react'
import './BodySection.css'

export default function TextAndImage({ image, color, title, body }) {
    return (
        <div className = { `body-component img-component image-and-text ${image === "cherry" ? 'cherry' : 'orange'}`}>
            <p className= { `image-and-text-title ${color === "green" ? 'green' : 'blue'}` } >{title}</p>
            <p className= { `image-and-text-body ${color === "green" ? 'green' : 'blue'}` }>{body}</p>
        </div>
    )
}
