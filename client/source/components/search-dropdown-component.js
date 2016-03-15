import React from 'react'

export default React.createClass({

    displayName: 'Search Dropdown Component',

    componentDidMount() {
        console.log("Search Dropdown mounted...")
    },

    componentWillUnmount() {
        console.log("Search Dropdown un-mounted...")
    },

    render() {
        return (
            <select>
                <option className='select-header' selected disabled>Search By</option>
                <option className='select-option' value="index">Index</option>
                <option className='select-option' value="ip">IP Address</option>
                <option className='select-option' value="passwords">Passwords</option>
                <option className='select-option' value="id">ID</option>
                <option className='select-option' value="key">Key</option>
                <option className='select-option' value="time">Time</option>
                <option className='select-option' value="port">Port</option>
                <option className='select-option' value="socket">Socket</option>
            </select>
        )
    }
})