import React from 'react'
import Testimonial from './Testimonial'
import './Testimonials.css'

export default function Testimonials() {
    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <p className="testimonials-title">CLIENT TESTIMONIALS</p>

                <div className="testimonials-grid">
                    <Testimonial person={1} />
                    <Testimonial person={2} />
                    <Testimonial person={3} />
                </div>
            </div>
        </div>
    )
}
