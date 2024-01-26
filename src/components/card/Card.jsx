import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
export default function Card({ item, pr }) {
  const navigate = useNavigate()
  const toPage = () => {
    navigate(`/product/${item.type}`, { state: item })
  }
  console.log("card", item)
  return (
    <div className="card" onClick={toPage}>
      <div className="card_image">
        <img src={item.image} alt="" className={`card_img_second  ${pr && 'pr1'}`} />
        <img src={item.imageSecond} alt="" className={`card_img_main ${pr && 'pr'}`} />
      </div>
      <div className={`card_is_new ${item.isNew && "is_new"}`}>{item.isNew && <span>New Season</span>}</div>
      <div className="card_type">{item.model}</div>
      <div className="card_price">
        <div className="card_old_price">${item.oldPrice}</div>
        <div className="card_new_price">${item.newPrice}</div>
      </div>
    </div>

  )
}
