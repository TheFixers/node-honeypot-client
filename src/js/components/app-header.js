/**
 * Filename: 'app-header.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App header component
 */
import React from 'react'
import SearchArea from './app-search'
import ListButton from './app-list-button'

export default () => {
    let styles = {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        float: 'left',
        margin: '10px',
        marginTop: '20px'
    }
    return (
        <div className="row" style={ {borderBottom: '2px solid #ccc'} }>
            <div className="col-md-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles } />
            	<h1>Honeypot Client</h1>
            </div>
            <div className="col-md-7">
                <SearchArea />
            </div>
            <ListButton />
        </div>
    )
}
