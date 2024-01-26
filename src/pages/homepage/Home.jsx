import React, { useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Category from '../../components/category/Category'
import Contact from '../../components/contact/Contact'
import { data } from '../../data'
import { UseSelector, useDispatch } from 'react-redux'
import { addOriginalData } from '../../store/DataSlice'

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts />
            <Category />
            <Contact />
        </div>
    )
}
