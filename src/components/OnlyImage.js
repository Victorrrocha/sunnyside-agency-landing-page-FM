import React from 'react'
import './BodySection.css'

export default function OnlyImage({image}) {


    return (
        <div className = { `body-component img-component ${image == "egg" ? 'egg' : 'cup'}`}>
            
        </div>
    )
}
