/**
 * Filename: 'app-results.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App results area component
 */

import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from './app-pagination'
import AppStore from '../stores/app-store'
import AppActions from '../actions/app-actions'
import _parseDataItems from '../modules/data-items-parser'
import SOURCE from '../static/SourceURL'
//import _fetchData from '../modules/fetch-data-promise'
import AppList from './app-list'

let started = false

const getServerData = () => {
    //console.log( "AppStore.getServerData(): ", AppStore.getServerData() )
    return { data: AppStore.getServerData() }
}

class AppResults extends React.Component {

    constructor( props ) {
        super( props )
        this.state = getServerData()
        this._onChange = this._onChange.bind( this )
    }

    componentWillMount() {
        AppStore.addChangeListener( this._onChange )
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange )
        this.serverRequest.abort()
    }

    _onChange() {
        this.setState( getServerData )
    }

    render() {

        // Styles
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

        // Uses 'data-item-paser.js'
        var items = null
        var filtered = null

        if ( this.state && this.state.data ) {
            items = _parseDataItems( this.state.data )
        }
        
        if ( items ) {

            var results = items.map( ( item, index ) => {
                if ( index < 20 ) // Limi to ten for now...
                    return ( 
                        <ResultsItem 
                          key={ index } 
                          item={ item } 
                          index={ index } 
                          txt={ index }
                        /> 
                    )
            })

            return (
                <div className="results text-center">
                    
                    <h3 className='text-success text-center' style={ styles }>
                
                    1-{ results.length } of { results.length } Results
                    </h3>

                    <br />

                    <div className="header row" style={ th }>
                        <div className="col-sm-1">
                            <h4><b>Index</b></h4>
                        </div>
                        <div className="col-sm-2">
                            <h4><b>Username</b></h4>
                        </div>
                        <div className="col-sm-1">
                            <h4><b>Type</b></h4>
                        </div>
                        <div className="col-sm-2">
                            <h4><b>IP Address</b></h4>
                        </div>
                        <div className="col-sm-1">
                            <h4><b>Port</b></h4>
                        </div>
                        <div className="col-sm-3">
                            <h4><b>Time</b></h4>
                        </div>
                        <div className="col-sm-2">
                            <div className="col-sm-6">
                                <h4><b>View</b></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4><b>List</b></h4>
                            </div>
                        </div>
                    </div>
        
                    { results }

                    <AppList />

                    <Pagination className="pagination text-center"/>
                </div>
            )
        } else {
            return <button 
                      className="col-sm-12 text-center btn btn-info" 
                      onClick={ AppActions.requestDataAsync.bind( null, SOURCE ) } 
                      style={ buttonStyle }>
                    Load Data From Server
                    </button>
        }
    }
    
}

export default AppResults

/*Call 844-400-7746 to qualify today. Application Deadline Ending Soon.
*/

