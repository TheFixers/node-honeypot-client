/**
 * Filename: 'app-results-item-detail.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results item detail component shows info when item is clicked
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import AppListItemRow from '../list/app-list-item-row'
import { Link } from 'react-router'

const getResultsItem = ( props ) => {
	if ( AppStore.getParsedData() ) {
        let data = AppStore.getParsedData()
        let item = data.find( ({ id }) => id === props.params.item )
        return {item}	
	}
}

const AppResultsItemDetail = ( props ) => {

    if ( props && props.item ) {
        
        var rows = Object.keys( props.item ).map( (key, index) => {
            if ( key !== 'id' ) {
                return <AppListItemRow 
                key={ index } 
                index={ index }  
                field={ key } 
                value={ props.item[key] } />  
            }  
        })
        
        return (
            <div className="item-detail">
                
                <h3 className='text-success text-center'>
                Item detail
                </h3>

                <table className="table table-hover table-striped">
                    <tbody className="">
                        { rows }
                    </tbody>
                </table>
                <div className="item-detail-btn-group btn-group">
                    <Link 
                        to="/"
                        type="button" 
                        className="btn btn-secondary">
                        Return to results
                    </Link>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={ AppActions.addItemToList.bind( null, props.item ) }>
                        Add to List
                    </button>
                </div>
                <br />
            </div>
        )
        
    } else {
        return (
            <h4 className="text-center"></h4>
        ) 
    }
}

export default StoreWatchMixin( AppResultsItemDetail, getResultsItem )
