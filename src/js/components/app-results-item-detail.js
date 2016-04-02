/**
 * Filename: 'app-results-item-detail.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results item detail component shows info when item is clicked
 */
import React from 'react'
import AppActions from '../actions/app-actions'

export default ( props ) => {
	let styles = {
		borderBottom: 'solid 1px #ccc',
		width: '100%'
	}
	let buttonStyles = {
		margin: '10px'
	}
	let index = props.index
    return (
        <div className="result" style={ styles }>
        { index }
        </div>
    )
}
