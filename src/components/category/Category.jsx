import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
export default function Category() {
    return (
        <div className="category">
            <div className="category_left">
                <img src="https://images.pexels.com/photos/6011982/pexels-photo-6011982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No" />
                <div className="category_name"><Link to="/products/men" className="link">Men</Link></div>
            </div>
            <div className="category_center">
                <div className="category_children">
                    <img src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No" />
                    <div className="category_name"><Link className="link" to="/products/children">Children</Link></div>
                </div>
                <div className="category_accessories">
                    <img src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No" />
                    <div className="category_name"><Link className="link" to="/products/accessories">Accessories</Link></div>
                </div>
            </div>
            <div className="category_right">
                <img src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600" alt="No" />

                <div className="category_name"><Link className="link" to="/products/women">Women</Link></div>
            </div>
        </div>
    )
}
