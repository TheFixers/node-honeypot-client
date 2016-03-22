import React from 'react'
import DataTable from './data-table-component.js'
import filter from '../modules/data-filter.js'
import DataItemsBuilder from '../modules/data-items-builder'

export default React.createClass({
    
    displayName: 'Results Area',

    propTypes: {
        serverData: React.PropTypes.array.isRequired,
        searchTerm: React.PropTypes.string.isRequired,
        searchType: React.PropTypes.string.isRequired
    },

    componentDidMount() {
        console.log("Results Area mounted...")
    },

    componentWillUnmount() {
        console.log("Results Area un-mounted...")
    },

    render() {
        return (
            <div className='react-results-area-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        
        let data = this.props.serverData

        // TODO: (Refactor) Send back the NEW data objects...
        let dataItems = DataItemsBuilder(data)

        let searchTerm = this.props.searchTerm
        let searchType = this.props.searchType

        var filteredData = filter(data, searchType, searchTerm)
        let len = filteredData.length

        let results = ("Showing " + len) + (len === 1 ? " result" : " results")

        return (
            <div>
                <p>{results}</p>    
                {Object.keys(filteredData).map((item, index) => {
                    
                    let dataItem = filteredData[item]

                    let values = {
                        index: String(dataItem.index),
                        clientId: String(dataItem.id),
                        clientType: String(dataItem.type),
                        clientIp: String(dataItem.ip),
                        clientUsername: String(dataItem.username),
                        clientPasswords: String(dataItem.passwords),
                        clientData: String(dataItem.data),
                        clientKey: String(dataItem.key),
                        clientTime: String(dataItem.time),
                        clientPort: String(dataItem.port),
                        clientSocket: String(dataItem.socket)
                    }

                    return (
                        <DataTable
                            key={index}
                            index={values.index}
                            clientType={values.clientType}
                            clientId={values.clientId}
                            clientIp={values.clientIp}
                            clientUsername={values.clientUsername}
                            clientPasswords={values.clientPasswords}
                            clientKey={values.clientKey}
                            clientData={values.clientData}
                            clientTime={values.clientTime}
                            clientPort={values.clientPort}
                            clientSocket={values.clientSocket}
                            searchTerm={this.props.searchTerm}
                            searchType={this.props.searchType} />
                    )

                })}
            </div>
        )
    }
})