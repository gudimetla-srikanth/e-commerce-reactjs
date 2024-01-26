import React, { useState } from 'react'
import './Navbar.css'
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const [openCart, setOpenCart] = useState(false)
    const cartQt = useSelector(state => state.data.cartQt)
    return (
        <div className="navbar">
            <div className="navbar_wrapper">
                <div className="navbar_left">
                    <div className="nav_item">
                        <Link className='link' to="/"><h1>mycart</h1></Link>
                    </div>
                </div>
                <div className="navbar_right">
                    <div className="item">
                        <Link className='link' to='/products/men'><span>Men</span></Link>
                    </div>
                    <div className="nav_item">
                        <Link className='link' to='/products/women'><span>Women</span></Link>
                    </div>
                    <div className="nav_item">
                        <Link className='link' to='/products/children'><span>Children</span></Link>
                    </div>
                    <div className="nav_item">
                        <Link className='link' to='/products/accessories'><span>Accessoriies</span></Link>
                    </div>
                    <div className="nav_item" onClick={() => {
                        setOpenCart(prev => !prev)
                    }}>
                        <LocalMallSharpIcon className='cart_opener' />
                        <span className='nav_cart_value'>{cartQt}</span>
                    </div>
                    {openCart && <Cart open={openCart} set={setOpenCart} />}
                </div>
            </div>
        </div>
    )
}
