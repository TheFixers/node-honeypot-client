import React from 'react'

export default React.createClass({

    displayName: 'Search Dropdown Component',

    propTypes: {
        value: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },

    componentDidMount() {
        //console.log("Search Dropdown Option mounted...")
    },

    componentWillUnmount() {
        //console.log("Search Dropdown Option un-mounted...")
    },

    render() {
        return (
            <option 
                className='select-option'
                value={this.props.value}>
            {this.props.text}
            </option>
        )
    }
})