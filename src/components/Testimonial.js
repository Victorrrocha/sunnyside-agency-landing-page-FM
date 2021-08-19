import React from 'react'
import emily from '../styles/images/image-emily.jpg'
import thomas from '../styles/images/image-thomas.jpg'
import jennie from '../styles/images/image-jennie.jpg'

export default function Testimonial({person}) {

    let photo
    let text
    let personsName
    let title

    if(person === 1){
        photo = emily
        text = "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        personsName = "Emily R."
        title = "Marketing Director"
    }
    else if(person === 2){
        photo = thomas
        text = "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        personsName = "Thomas S."
        title = "Chief Operating Officer"
    }
    else {
        photo = jennie
        text = "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        personsName = "Jennie F."
        title = "Business Owner"
    }

    return (
        <div>
            <div>
                <div className="testimonial-avatar-container">
                    <img className="testimonial-avatar" src={photo} alt="avatar" />
                </div>
                <p className="testimonial-text">{text}</p>
                <p className="avatar-name">{personsName}</p>
                <p className="avatar-title">{title}</p>
            </div>
        </div>
    )
}
