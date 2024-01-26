import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import './Product.css'
import { addToCart } from '../../store/DataSlice';
import { useLocation } from 'react-router-dom';
export default function Product() {
    const { state } = useLocation()
    const [cartVal, setCartVal] = useState(1)
    const [fav, setFav] = useState(false)
    const cartValHnadlerInc = () => {
        setCartVal(prev => prev + 1)
    }
    const dispatch = useDispatch()
    const cartValHnadlerDec = () => {
        setCartVal(prev => prev > 1 ? prev - 1 : 1)
    }
    const toCart = () => {
        dispatch(addToCart({
            id: state.id,
            qt: cartVal,
            type: state.type,
            model: state.model,
            image: state.image,
            description: state.description,
            isNew: state.isNew,
            oldPrice: state.oldPrice,
            newPrice: cartVal * state.newPrice
        }))
        setCartVal(1)
    }
    console.log(state.image)
    return (
        <div className="product">
            <div className="product_wrapper">
                <div className="products_left">
                    <img src={state.image} alt="" />
                </div>
                <div className="products_right">
                    <div className="products_item">
                        <div className="product_title_name"><h3>{state.model}</h3></div>
                    </div>
                    <div className="products_item">
                        <div className="products_title_name"><h2>${state.newPrice}</h2></div>
                    </div>
                    <div className="products_item">
                        <div className="products_title_name">{state.description}</div>
                    </div>
                    <div className="products_item product_cart_inc">
                        <span onClick={cartValHnadlerDec}>-</span>
                        <span>{cartVal}</span>
                        <span onClick={cartValHnadlerInc}>+</span>
                    </div>
                    <div className="products_item fav_cart">
                        <div className="products_title product_cart" onClick={toCart}><h3>add to cart</h3></div>
                        <div className={`products_title_name ${fav && "fav"}`}><span onClick={() => setFav(prev => !prev)}><FavoriteIcon /></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
