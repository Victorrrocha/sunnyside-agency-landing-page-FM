import React from 'react'
import './BodySection.css'

export default function OnlyText({title, body_text, highlight_color}) {
    return (
        <div className="body-component">
            <p className="body-title">{title}</p>
            <p className="body-text">{body_text}</p>
            <div>
                <a className="body-link" href="#">LEARN MORE</a>
            </div>
        </div>
    )
}
