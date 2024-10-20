import React from 'react'
import PublicRoute from './PublicRoute'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Routers = () => {
    return (
        <div>
            <Header />
            <PublicRoute />
            <Footer />
        </div>
    )
}

export default Routers