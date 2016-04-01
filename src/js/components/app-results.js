import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from './app-pagination'
import FakeData from '../static/FakeData'
import AppStore from '../stores/app-store'
import AppActions from '../actions/app-actions'
import _parseDataItems from '../modules/data-items-parser'
import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

let started = false

const getServerData = () => {
    console.log("Fetching server data... ... ...")
    return { data: AppStore.getServerData() }
}

class AppResults extends React.Component {

    constructor( props ) {
        super( props )
        this.state = AppStore.getServerData()
        this._onChange = this._onChange.bind( this )
    }

    componentWillMount() {
        AppStore.addChangeListener( this._onChange )
        //this._setData()
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange )
        this.serverRequest.abort()
    }

    _onChange() {
        this.setState( getServerData )
    }

    _hasUsername(value) {
        if (value.hasOwnProperty('Username') && value.Username !== "") {
            return true
        } else {
            return false
        }
    }

    render() {

        // Styles
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

        // Uses 'data-item-paser.js'
        var items = null
        var filtered = null

        if (this.state && this.state.data) {
            items = _parseDataItems( this.state.data )
            
        }

        if (items) {
            try {
                filtered = ( items.filter( this._hasUsername ) )
            } catch (err) {
                console.error( err )
            }
        }
        
        if ( filtered ) {

            console.log( filtered )

            var resultsItems = filtered.map(( item, index ) => {
                //if ( index < 10 ) // Limi to ten for now...
                    return ( 
                        <ResultsItem 
                          key={ index } 
                          item={ item } 
                          index={ index } 
                          txt={ index + 1 }
                        /> 
                    )
            })

            return (
                <div className="results text-center">
                    
                    <h3 className='text-success text-center' style={ styles }>
                
                    1-{ filtered.length } of { filtered.length } Results
                    </h3>

                    <br />

                    <div className="header row">
                        <div className="col-sm-1">
                            <h4><b>Item</b></h4>
                        </div>
                        <div className="col-sm-3">
                            <h4><b>Username</b></h4>
                        </div>
                        <div className="col-sm-1">
                            <h4><b>Type</b></h4>
                        </div>
                        <div className="col-sm-2">
                            <h4><b>IP Address</b></h4>
                        </div>
                        <div className="col-sm-3">
                            <h4><b>Time</b></h4>
                        </div>
                        <div className="col-sm-2">
                            <h4><b>View / Add</b></h4>
                        </div>
                    </div>
        
                    { resultsItems }

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

