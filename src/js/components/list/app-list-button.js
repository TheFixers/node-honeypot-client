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
    return Object.assign( { qty: AppStore.getListTotals() } )
}

const AppListButton = ( props ) => {
	
    let buttonStyles = {
        maxWidth: '120px',
        minWidth: '120px',
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
                List ( <b> { props.qty } { txt } </b> )
            </Link>
        </div>
    )
}

export default StoreWatchMixin( AppListButton, getListTotals )