/**
 * Filename: 'app-results-item-detail.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results item detail component shows info when item is clicked
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import _parseDataItems from '../../modules/data-items-parser'
import AppListItemRow from '../list/app-list-item-row'
import { Link } from 'react-router'

const getResultsItem = ( props ) => {
	if ( AppStore.getServerData() ) {
		let data = _parseDataItems( AppStore.getServerData() )
        let item = data.find( ({ id }) => id === props.params.item )
        return {item}	
	}
}

const AppResultsItemDetail = ( props ) => {

    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    }

    let buttonStyle = {
        margin: '20px',
        width: '30%',
        clear: 'both',
        marginLeft: '35%',
        marginRight: '35%' 
    }

    if ( props && props.item ) {
        
        var rows = Object.keys( props.item ).map( (key, index) => {
            return <AppListItemRow 
                key={ index } 
                index={ index }  
                field={ key } 
                value={ props.item[key] } />    
        })
        
        return (
            <div className="item-detail">
                <h3 className='text-success text-center' style={ styles }>
                Item detail
                </h3>

                <table className="table table-hover table-striped">
                    <tbody className="">
                        { rows }
                    </tbody>
                </table>
                <br />
                <div className="item-detail-btn-group btn-group" style={ buttonStyle }>
                    <Link 
                        to="/"
                        type="button" 
                        className="btn btn-secondary">
                        Go back
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