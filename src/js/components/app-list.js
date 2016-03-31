import React from 'react'
import AppStore from '../stores/app-store'
import AppListItem from './app-list-item'

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
	let item = props.item
    return (
        <div className="result text-center" style={ styles }>
        	<div className="row">
                <div className="col-sm-1">
                    <p>{ props.txt }</p>
                </div>
                <div className="col-sm-2">
                    <p>{ item.TYPE }</p>
                </div>
                <div className="col-sm-2">
                    <p>{ item.IP }</p>
                </div>
                <div className="col-sm-3">
                    <p>{ item.Time }</p>
                </div>
                <div className="col-sm-4">
                    <button 
                    	style={ buttonStyles } 
                    	type="button" className="btn btn-secondary"
                    	onClick={ AppActions.removeItemFromList.bind( null, item ) }>
                    x
                    </button>
                </div>
            </div>
        </div>
    )
}
