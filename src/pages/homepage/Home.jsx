import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Category from '../../components/category/Category'

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts />
            <Category />
        </div>
    )
}
