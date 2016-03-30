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
            console.log( "IF THIS WORKS IM A GENIUS" )
             this.setState( { data: data } )
        })
        .catch( ( err ) => {
            console.log( err.message )
        })
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


        var resultsItems = items.map(( item, index ) => {
            //if ( index < 10 ) // Limi to ten for now...
                return ( 
                    <ResultsItem 
                      key={ index } 
                      item={ item } 
                      index={ index } 
                      txt={ index }/> 
                )
        })

        if ( items !== 'undefined' && items !== null ) {
            return (
                <div className="results text-center">
                    <h4  
                      className='text-success text-center' 
                      style={ styles }>
                    Showing 1-72 of 72 results
                    </h4>

                    <div className="header row">
                        <div className="col-sm-1">
                            <h4>Index</h4>
                        </div>
                        <div className="col-sm-2">
                            <h4>Type</h4>
                        </div>
                        <div className="col-sm-2">
                            <h4>IP Address</h4>
                        </div>
                        <div className="col-sm-3">
                            <h4>Time</h4>
                        </div>
                        <div className="col-sm-4">
                            <h4>Actions</h4>
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

// Dont delete yet, old tables, really cool....
{/*<div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            
        </tbody>

    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>
*/}