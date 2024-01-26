import React from 'react'
import './FeaturedProducts.css'
import { trendingdata } from '../../data'
import Card from '../card/Card'

export default function FeaturedProducts() {
    return (
        <div className="featuredProducts">
            <div className="featuredProducts_wrapper">
                <div className="featuredProducts_top">
                    <div className="featuredProducts_name">
                        <h1>Featured Products</h1>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, non! Exercitationem voluptatibus vitae amet porro natus vel sint obcaecati nemo perspiciatis beatae facere, ut corrupti quibusdam reiciendis soluta dolores eligendi. Eum, repellendus.</span>
                </div>
                <div className="featuredProducts_bottom">
                    <div className="featuredProducts_image">
                        {trendingdata.map((item, index) => {
                            return <Card key={index} item={item} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
