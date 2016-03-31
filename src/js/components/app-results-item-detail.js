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
        	Detail...
        </div>
    )
}
