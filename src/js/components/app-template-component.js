import React from 'react'
import Header from './app-header-component'
import Footer from './app-footer-component'

export default (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}


