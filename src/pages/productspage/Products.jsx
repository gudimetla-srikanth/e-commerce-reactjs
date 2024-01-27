import React, { useState } from 'react'
import Card from '../../components/card/Card'
import { data } from '../../data'
import './Products.css'
import { useParams } from 'react-router-dom'
export default function Products() {
    const { id } = useParams()
    const [range, setRange] = useState(100000)
    const [radioVal, setRadioVal] = useState('')
    const radioHandle = (e) => {
        const { id } = e.target
        console.log("id", id)
        setRadioVal(id)
        if (id === 'ASC') {
            data.sort(function (a, b) {
                return a.newPrice - b.newPrice;
            })
        } else {
            data.sort(function (a, b) {
                return a.newPrice - b.newPrice
            }).reverse()
        }
    }
    return (
        <div className="products">
            <div className="products_wrapper">
                <div className="product_left">
                    <div className="product_left_item">
                        <h3>between range</h3>
                        <div className="product_item res">
                            <span className='res1'>0</span>
                            <input type="range" min={0} max={100000} onChange={(e) => setRange(e.target.value)} />
                            <span className='res2'>{range}</span>
                        </div>
                    </div>
                    <div className="product_left_item">
                        <h3>sort according to price</h3>
                        <div className="product_item">
                            <input type="radio" name="price" id="ASC" onChange={radioHandle} />
                            <label htmlFor="price">Low to high</label>
                        </div>
                        <div className="product_item">
                            <input type="radio" name="price" id="DEC" onChange={radioHandle} />
                            <label htmlFor="price">High to Low</label>
                        </div>
                    </div>
                </div>
                <div className="product_right">
                    <div className="products_cards">
                        {data?.map((item, index) => {
                            if (range > 0 && range < 100000) {
                                if (item.type === id && item.newPrice <= range) {
                                    return <Card item={item} key={index} pr />
                                }
                            } else {
                                if (item.type === id) {
                                    return <Card item={item} key={index} pr />
                                }
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
