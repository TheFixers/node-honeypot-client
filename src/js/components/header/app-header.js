/**
 * Filename: 'app-header.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App header component
 */
import React from 'react'
import SearchArea from '../search/app-search'
import AppListButton from '../list/app-list-button'

const AppHeader = ( props ) => {
    
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
            { console.log("Depth:", props.getRouteDepth)  }
            <div className="col-sm-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles } />
                <h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-6">
                <SearchArea />
            </div>
            <div className="col-sm-2">
                <AppListButton />
            </div>
            
        </div>
    )
}

export default AppHeader
