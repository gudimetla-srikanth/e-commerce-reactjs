import React from 'react'
import './App.css'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/homepage/Home';
import Products from './pages/productspage/Products';
import Product from './pages/productpage/Product';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Contact />
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "/products/:id",
            element: <Products />,
        },
        {
            path: "/product/:id",
            element: <Product />,
        },
        ]
    },
]);

export default function App() {
    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    )
}
