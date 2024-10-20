import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import ProductList from '../pages/Product/ProductList'
import ViewProduct from '../pages/Product/ViewProduct'

const PublicRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/product-list' element={<ProductList/>} />
                <Route path='/view-product/:slug' element={<ViewProduct/>} />
                <Route path='/contact' element={<Contactus />} />
            </Routes>
        </div>
    )
}

export default PublicRoute