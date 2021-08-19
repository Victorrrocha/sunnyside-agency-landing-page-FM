import React from 'react'
import './BodySection.css'
import OnlyText from './OnlyText'
import OnlyImage from './OnlyImage'
import TextAndImage from './TextAndImage'

export default function BodySection() {
    return (
        <div className="body-section-container">
            <OnlyText   title="Transform your brand" 
                        body_text="We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you."
                        highlight_color="hsl(51, 100%, 49%)" />
            <OnlyImage image = "egg" />
            <OnlyImage image = "cup" />
            <OnlyText   title="Stand out to the right audience" 
                        body_text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                        highlight_color="hsl(7, 99%, 70%)" />
            <TextAndImage image="cherry" color="green" title="Graphic design" body="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
            <TextAndImage image="orange" color="blue" title="Photography" body="Increase your credibility by getting the most stunning, high-quality photos that improve your business image." />
        </div>
    )
}