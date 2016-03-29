import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from './app-pagination'
import FakeData from '../static/FakeData'
import AppStore from '../stores/app-store'
import parseDataItems from '../modules/data-items-parser'

function getServerData() {
    return { data: FakeData } //AppStore.getServerData() }
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
    }

    _onChange() {
        this.setState( stateCallback( this.props ) )
    }

    render() {

        // Styles
        let styles = {
            marginTop: '10px',
            marginBottom: '10px'
        }

        var items = parseDataItems(this.state.data)

        console.log(items)

        var resultsItems = this.state.data.map(( item, index ) => {
            if ( index < 10 ) // Limi to ten for now...
                return ( 
                    <ResultsItem 
                      key={ index } 
                      item={ item } 
                      index={ index } 
                      txt={ 'Item ' + index }/> 
                )
        })

        return (
            <div className="results">
                <h4  className='text-success text-center' style={ styles }>
                Showing 1-72 of 72 results
                </h4>
    
                { resultsItems }

                <br /><br />

                <Pagination className="text-center"/>

                <br /><br />
            </div>
        )
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