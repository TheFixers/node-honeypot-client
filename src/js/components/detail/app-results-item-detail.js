/**
 * Filename: 'app-results-item-detail.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results item detail component shows info when item is clicked
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import { Link } from 'react-router'

function getResultsItem() {
	/*if (AppStore.getCatalog()) {
		let item = AppStore.getCatalog().find( ({ id }) => id === props.params.id )
		return { item }
	}*/	
}

const AppResultsItemDetail = ( props ) => {

    if ( props && props.item) {
        var rows = Object.keys( props.item ).map( (key, index) => {
            return <AppListItemRow 
                style={ styles } 
                key={ index } 
                index={ index }  
                field={ key } 
                value={ props.item[key] } />    
        })
        
        return (
            <div className="">
                <table className="table table-hover table-striped" style={ styles }>
                    <tbody className="">
                        { rows }
                    </tbody>
                </table>
                <Link to="/" 
                    style={ buttonStyles } 
                    type="button" 
                    className="btn btn-secondary">
                Go back
                </Link>
                <button
                    style={ buttonStyles }
                    type="button"
                    className="btn btn-secondary"
                    onClick={ AppActions.addItemToList.bind( null, props.item ) }>
                Add to List
                </button>
            </div>
        )
        
    } else {
        return (
            <h4 className="text-center">Not functional yet</h4>
        ) 
    }
}

export default StoreWatchMixin( AppResultsItemDetail, getResultsItem )
