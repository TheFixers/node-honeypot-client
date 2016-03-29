import React from 'react';
import ResultsItem from './app-results-item'
import Pagination from './app-pagination'
import FakeData from '../static/FakeData'

import AppStore from '../stores/app-store'

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

        // TODO: Temp crap...
        let txt = "Item"
        let numResults = 10
        let text = "\<Prev, 1, 2, 3, 4, 5, 6, 7, Next\>"

        // Styles
        let styles = {
            marginTop: '10px',
            marginBottom: '10px'
        }

        var items= this.state.data.map( ( item ) => {
            let temp = {}
            for (var subItem in item) {
                //console.log(subItem, item[subItem])
                if (subItem === '_id') {
                    for (var idItem in item[subItem]) {
                        temp[idItem] = item[subItem][idItem]
                        //console.log(idItem, item[subItem][idItem])
                    }
                }
                if (subItem === 'Client') {
                    for (var clientItem in item[subItem]) {
                        temp[clientItem] = item[subItem][clientItem]
                        //console.log(clientItem, item[subItem][clientItem])
                        if (clientItem === 'Data') {
                            for (var dataItem in item[subItem][clientItem]) {
                                temp[dataItem] = item[subItem][clientItem][dataItem]
                                //console.log(dataItem, item[subItem][clientItem][dataItem])
                            }
                        }
                    }
                }

            }
            //console.log("-----------\n\n")
            return Object.assign( {}, temp )
        } )

        console.log(items)

        var results = this.state.data.map((item, index) => {
            if (index < 10) // Limi to ten for now...
                return <ResultsItem key={index} item={item} index={index} txt={txt + ' '+ index}/>
        })

        return (
            
            <div className="results">
                {/* idList*/ }
                
                <h4  className='text-success text-center' style={styles}>
                Showing 1-{numResults} of 72 results
                </h4>
                
                { results }

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