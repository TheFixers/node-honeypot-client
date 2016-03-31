import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from './app-pagination'
import FakeData from '../static/FakeData'
import AppStore from '../stores/app-store'
import _parseDataItems from '../modules/data-items-parser'
import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

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
        this._onChange()
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange )
        this.serverRequest.abort()
    }

    _onChange() {
        this.serverRequest = _fetchData( SOURCE )
        
        this.serverRequest.then( ( data ) => {
            this.setState( { data: data } )
        })
        .catch( ( err ) => {
            console.log( err.message )
        })
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

        // Uses 'data-item-paser.js'
        var items = []
        let data = this.state.data

        if (data) {
            items = _parseDataItems( this.state.data )
        }

        console.log( "Server Data Items:", items )

        var filtered = (items.filter(this._hasUsername))


        var resultsItems = filtered.map(( item, index ) => {
            //if ( index < 10 ) // Limi to ten for now...
                return ( 
                    <ResultsItem 
                      key={ index } 
                      item={ item } 
                      index={ index } 
                      txt={ index + 1 }/> 
                )
        })



        if ( filtered.length > 0 ) {
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
                        <div className="col-sm-2">
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
                        <div className="col-sm-3">
                            <h4><b>Actions</b></h4>
                        </div>
                    </div>
        
                    { resultsItems }

                    <Pagination className="pagination text-center"/>
                </div>
            )
        } else {
            return <h4 className="text-center">Loading...</h4>
        }
        
    }
    
}



export default AppResults

