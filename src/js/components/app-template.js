/**
 * Filename: 'app-template.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App template component
 * See: https://github.com/reactjs/react-router/blob/master/docs/API.md#named-components
 */

import React from 'react'
import SearchHeader from './header/app-header-search'
import Footer from './footer/app-footer'

export default ( props ) => {
    return (
        <div className="container">
            { props.widget }
            { props.main }
            <Footer />
        </div>
    )
}