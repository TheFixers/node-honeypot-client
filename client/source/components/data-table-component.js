import React from 'react'
import TableRow from './data-table-row-component.js'
import DataItemCreator from '../modules/data-item-object-creator.js'
import RowCreator from '../modules/data-table-row-creator.js'

export default React.createClass({

    displayName: 'Data Table Component',

    propTypes: {
        searchType: React.PropTypes.string.isRequired,
        searchTerm: React.PropTypes.string.isRequired,
        index: React.PropTypes.string.isRequired,
        clientIp: React.PropTypes.string.isRequired,
        clientId: React.PropTypes.string.isRequired,
        clientType: React.PropTypes.string.isRequired,
        clientUsername: React.PropTypes.string.isRequired,
        clientKey: React.PropTypes.string.isRequired,
        clientPasswords: React.PropTypes.string.isRequired,
        clientData: React.PropTypes.string.isRequired,
        clientTime: React.PropTypes.string.isRequired,
        clientPort: React.PropTypes.string.isRequired,
        clientSocket: React.PropTypes.string.isRequired
    },

    componentDidMount() {
        //console.log("Table mounted...")
    },

    componentWillUnmount() {
        //console.log("Table un-mounted...")
    },

    render() {
        return (
            <div className='react-data-table-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        let rows = RowCreator(this.props)
        return ( 
            <table className='table center'>
                <tbody> 
                    {rows.map((item, index) => {
                        return (
                            <TableRow
                                key={index}
                                searchType={this.props.searchType}
                                searchTerm={this.props.searchTerm}
                                th={item.name}
                                td={item.value} />
                        )
                    })}
                </tbody> 
            </table>
        )
    }
})