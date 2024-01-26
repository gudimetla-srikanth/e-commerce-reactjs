import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
export default function Category() {
    return (
        <div className="category">
            <div className="category_left">
                <img src={require(`../../sliderImages/slider1.jpg`)} alt="No" />
                <div className="category_name"><Link to="/products/men" className="link">Men</Link></div>
            </div>
            <div className="category_center">
                <div className="category_children">
                    <img src={require(`../../sliderImages/slider1.jpg`)} alt="No" />
                    <div className="category_name"><Link className="link" to="/products/children">Children</Link></div>
                </div>
                <div className="category_accessories">
                    <img src={require(`../../sliderImages/slider3.jpg`)} alt="No" />
                    <div className="category_name"><Link className="link" to="/products/accessories">Accessories</Link></div>
                </div>
            </div>
            <div className="category_right">
                <img src={require(`../../sliderImages/slider2.jpg`)} alt="No" />

                <div className="category_name"><Link className="link" to="/products/women">Women</Link></div>
            </div>
        </div>
    )
}
