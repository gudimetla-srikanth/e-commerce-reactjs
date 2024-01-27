import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const [openCart, setOpenCart] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const cartQt = useSelector(state => state.data.cartQt)

    return (
        <div className="navbar">
            <div className="navbar_wrapper">
                <div className="navbar_left">
                    <div className="nav_item">
                        <Link className='link' to="/"><h1>mycart</h1></Link>
                    </div>
                </div>
                <div className="nav_bar_res">
                    <MenuIcon sx={{ fontSize: "40px" }} onClick={() => setOpenMenu(prev => !prev)} />
                    {openMenu && <div className="menu_opener">
                        <div className="close_mark"><HighlightOffIcon sx={{ fontSize: "50px" }} onClick={() => setOpenMenu(prev => !prev)} /></div>
                        <div className="res_item"><Link className='link' to='/products/men'><span onClick={() => setOpenMenu(prev => !prev)}>Men</span></Link></div>
                        <div className="res_item"><Link className='link' to='/products/women'><span onClick={() => setOpenMenu(prev => !prev)}>Women</span></Link></div>
                        <div className="res_item"><Link className='link' to='/products/children'><span onClick={() => setOpenMenu(prev => !prev)}>Children</span></Link></div>
                        <div className="res_item"><Link className='link' to='/products/accessories'><span onClick={() => setOpenMenu(prev => !prev)}>Accessories</span></Link></div>
                        <div className="res_item"><span><LocalMallSharpIcon onClick={prev => setOpenCart(prev => !prev)} /><span className='cartQT_val'>{cartQt}</span></span>
                            {openCart && <Cart open={openCart} set={setOpenCart} />}
                        </div>
                    </div>}
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
                        <Link className='link' to='/products/accessories'><span>Accessories</span></Link>
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
