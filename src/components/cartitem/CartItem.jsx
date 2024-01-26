import React from 'react'
import './CartItem.css'
import { useDispatch } from 'react-redux'
import { filterCart } from '../../store/DataSlice'
export default function CartItem({ data }) {
    const dispatch = useDispatch()
    const remove = () => {
        dispatch(filterCart(data))
    }
    return (
        <div className="cart_item">
            <img src={data.image} alt="" />
            <div className="cart_image_name">{data.model}</div>
            <div className="cart_item_qt">Qt : {data.qt}</div>
            <div className="cart_item_price">Price : ${data.newPrice}</div>
            <div className="cart_item_remove" onClick={remove}>REMOVE</div>
        </div>
    )
}
