import React from 'react'

export default React.createClass({

    displayName: 'Search Button Component',

    componentDidMount() {
        console.log("Search Button mounted...")
    },

    componentWillUnmount() {
        console.log("Search Button un-mounted...")
    },

    render() {
        return (
            <button 
                className="btn-search"
                type="reset"
                value="Reset">Go</button>
        )
    }
})