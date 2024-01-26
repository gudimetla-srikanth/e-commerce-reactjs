import React, { useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Slider() {
    const [sliderChange, setSliderChange] = useState(1)
    const prevSliderChanger = () => {
        setSliderChange(prev => prev === 1 ? 3 : prev - 1)
    }
    const nextSliderChanger = () => {
        setSliderChange(prev => prev === 3 ? 1 : prev + 1)
    }
    console.log(sliderChange)
    return (
        <div className="slider">
            <img src={require(`../../sliderImages/slider${sliderChange}.jpg`)} alt="" />
            <div className="slider_tabs">
                <div>
                    <ArrowBackIosIcon className="sIcon" sx={{ fontSize: "30px", color: "white" }} onClick={prevSliderChanger} />
                </div>
                <div >
                    <ArrowForwardIosIcon className="sIcon" sx={{ fontSize: "30px", color: "white" }} onClick={nextSliderChanger} />
                </div>
            </div>
        </div>
    )
}
