/**
 * Filename: 'app-list-button.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list button component
 */
import React from 'react'
import AppStore from '../stores/app-store'

export default ( props ) => {
	
    let buttonStyles = {
        maxWidth: '150px',
        minWidth: '150px',
        height: 'auto',
        marginTop: '18px',
    }

    let txt = ( props.qty === 1 ) ? 'item' : 'items'
    return (
    	<div className="col-md-1">
            <button 
            className="btn btn-info" 
            type="button" text="Show List" 
            style={ buttonStyles } 
            onClick="">
                <i 
                className="glyphicon glyphicon-user" 
                aria-hidden="true" /> My List (<b>{ props.qty } { txt }</b> )
            </button>
        </div>
    )
}