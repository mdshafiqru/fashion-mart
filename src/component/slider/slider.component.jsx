import React from 'react'
import './slider.styles.scss'
import ShoppingImage from '../../assets/women shopping.jpg'

const Slider = () => (
    <div className ='slider-container'>
        <div className='slide' >
        <img className='slide-img' src={ShoppingImage} alt ='shopping' />
        </div>
        

        <div className='text-container'>
            <h1>The largest </h1>
            <h1>shopping site</h1>
            <p> has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron</p>
        </div>

    </div>
)

export default Slider;