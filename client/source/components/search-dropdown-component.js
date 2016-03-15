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
                <option className='select-child' value="index">Index</option>
                <option className='select-child' value="ip">IP Address</option>
                <option className='select-child' value="passwords">Passwords</option>
                <option className='select-child' value="id">ID</option>
                <option className='select-child' value="key">Key</option>
                <option className='select-child' value="time">Time</option>
                <option className='select-child' value="port">Port</option>
                <option className='select-child' value="socket">Socketi</option>
            </select>
        )
    }
})