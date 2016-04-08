/**
 * Filename: 'app-results.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results area component
 */

import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from '../pagination/app-pagination'
import AppStore from '../../stores/app-store'
import AppActions from '../../actions/app-actions'
import SOURCE from '../../static/SourceURL'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import _filtered from '../../modules/search-filter'
//import PaginationAPI from '../../api/PaginationAPI'

const getServerData = () => {
    return Object.assign({ 
        data: AppStore.getParsedData(), 
        search: AppStore.getSearchParams(), 
        filtered: AppStore.getFiltered(),
    })
}

const AppResults = ( props ) => {

    // TODO: Extract Styles
    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    }

    let th = {
        borderBottom: 'solid 2px #ccc',
    }

    let buttonStyle = {
        margin: '20px',
        width: '30%',
        clear: 'both',
        marginLeft: '35%',
        marginRight: '35%' 
    }

    let searchType = props.search.type
    let searchTerm = props.search.term

    var items = null
    let matches = 0

    if ( props && props.data ) {
        items =  props.data
    }

    if ( items ) {

/*        let numResults = items.length
        let pageSize = props.pageSize
        let page = props.page
        let pages = Math.ceil( numResults / pageSize )
        let offset = props.offset
        let overflow = numResults % pageSize
        let isLastPage = ( page * pageSize + overflow === numResults )
        let cutoff =  ( isLastPage ) ? numResults : ( offset + pageSize )*/

        var results = items.map( ( item, index ) => {
            if ( _filtered( item, searchType, searchTerm ) 
                /*&& index >= offset && index < cutoff*/ ) {

                return ( 
                    <ResultsItem 
                      key={ index } 
                      item={ item } 
                      index={ index } 
                      txt={ index } /> 
                )
            }      
        })



        return (
            <div className="results text-center">
                <h3 className='text-success text-center' style={ styles }>
                {/*Showing { offset }-{ offset + 9 } of*/} { results.length } Results
                </h3>
                <br />
                <div className="header row" style={ th }>
                    <div className="col-sm-2 col-md-2">
                        <h4><b>Item</b></h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4><b>Username</b></h4>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h4><b>IP Address</b></h4>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h4><b>Time</b></h4>
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <h4><b>View / List</b></h4>
                    </div>
                </div>
                { results }
 {/*               <Pagination 
                    className="pagination text-center"
                    page={ props.page }
                    pageSize={ props.pageSize }
                    countResults={ results.length }
                    offset= { props.offset } />*/}
            </div>
        )
    } else {
        return (
            <h3 className="text-center">Loading...</h3>
        )
    }
}

export default StoreWatchMixin( AppResults, getServerData )

/*Call 844-400-7746 to qualify today. Application Deadline Ending Soon.
*/

