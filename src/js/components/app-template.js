/**
 * Filename: 'app-template.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App template component
 */

import React from 'react'
import SearchHeader from './header/app-header-search'
import Footer from './footer/app-footer'

export default ( props ) => {
	console.log( props.widget )
	console.log( props.route.path )
    return (
        <div className="container">
            { props.widget }
            { props.main }
            <Footer />
        </div>
    )
}


