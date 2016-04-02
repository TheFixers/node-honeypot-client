/**
 * Filename: 'app-list-button.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list button component
 */
import React from 'react'
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import { Link } from 'react-router'

const getListTotals = () => {
    return { qty: AppStore.getListTotals() } 
}

const AppListButton = ( props ) => {
	
    let buttonStyles = {
        maxWidth: '170px',
        minWidth: '170px',
        height: 'auto',
        marginTop: '18px',
    }

    let txt = ( props.qty === 1 ) ? 'item' : 'items'
    return (
    	<div className="col-md-1">
            <Link 
            to="/list" 
            className="btn btn-info" 
            type="button" text="Show List" 
            style={ buttonStyles }>
                <i 
                className="glyphicon glyphicon-user" 
                aria-hidden="true" /> My List ( <b>{ props.qty } { txt }</b> )
            </Link>
        </div>
    )
}

export default StoreWatchMixin( AppListButton, getListTotals )