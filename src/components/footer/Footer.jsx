import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_item">
                    <div className="footer_item">
                        <h2>Categories</h2>
                        <span>Men</span>
                        <span>Women</span>
                        <span>Children</span>
                        <span>Accessories</span>
                    </div>
                </div>
                <div className="footer_top_item">
                    <div className="footer_item">
                        <h2>Links</h2>
                        <Link className='link' to="/products/men"><span>Men</span></Link>
                        <Link className='link' to="/products/women"><span>Women</span></Link>
                        <Link className='link' to="/products/children"><span>Children</span></Link>
                        <Link className='link' to="/products/accessories"><span>Accessories</span></Link>
                    </div>
                </div>
                <div className="footer_top_item">
                    <div className="footer_item">
                        <h2>About</h2>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, impedit mollitia blanditiis facere aspernatur accusamus unde. Dolores, tempore.</span>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_item">
                    <h4>@Copyright.<span className='shop_name'>gstore</span></h4>
                </div>
            </div>
        </div>
    )
}
