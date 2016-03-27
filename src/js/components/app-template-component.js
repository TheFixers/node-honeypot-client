import React from 'react'
import Header from './app-header-component'

export default (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    )
}


