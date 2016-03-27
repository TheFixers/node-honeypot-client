import React from 'react'

export default React.createClass({

    displayName: 'Header Component',

    propTypes: {
        host: React.PropTypes.string.isRequired,
        source: React.PropTypes.string.isRequired
    },

    componentDidMount() {
        //console.log("Header mounted...")
    },

    componentWillUnmount() {
        //console.log("Header un-mounted...")
    },

    render() {
        return (
            <div className='react-header-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        return ( 
            <div className="header">
                <h1>Honeypot Client</h1>
                <h2>Server data @ <a href={this.props.source}> {this.props.host}</a></h2>
            </div>
        )
    },
})