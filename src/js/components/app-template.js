/**
 * Filename: 'app-template.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App template component
 */

import React from 'react'
import Header from './app-header'
import Footer from './app-footer'

export default ( props ) => {
    return (
        <div className="container">
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}


