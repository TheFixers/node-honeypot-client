/**
 * Filename: 'app-header.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App header component
 */
import React from 'react'
import AppListButton from '../list/app-list-button'
import { Link } from 'react-router'


const AppDefaultHeader = ( props ) => {
    
    let styles = {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        float: 'left',
        margin: '10px',
        marginTop: '20px'
    }
    
    let buttonStyles = {
        background: 'transparent',
        maxWidth: '150px',
        minWidth: '150px',
        height: 'auto',
        marginTop: '18px',
        padding: '5px',
        border: 'solid 1px #666',
        borderRadius: '3px'
    }
    
    return (
        <div className="row" style={ {borderBottom: '2px solid #ccc'} }>
            <div className="col-sm-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles } />
                <h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-6 text-right">
                <Link 
                    to="/"
                    style={ buttonStyles }
                    type="button" 
                    className="btn btn-secondary text-right">
                    Return to results
                </Link>
            </div>
            <div className="col-sm-2">
                <AppListButton />
            </div>
            
        </div>
    )
}

export default AppDefaultHeader
