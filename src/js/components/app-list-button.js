/**
 * Filename: 'app-list-button.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list button component
 */
import React from 'react'

export default () => {
	let buttonStyles = {
        width: 'auto',
        height: 'auto',
        marginTop: '18px',
    }
    return (
    	<div className="col-sm-1">
            <button 
                className="btn btn-info" 
                type="button" text="Show List" 
                style={ buttonStyles } 
                onClick="">
                <i className="glyphicon glyphicon-user" aria-hidden="true" /> My List
            </button>
        </div>
    )
}