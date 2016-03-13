import React from 'react'

export default React.createClass({
  
  displayName: 'Header Component',

  componentDidMount() {
      console.log("Header mounted...")
  },

  componentWillUnmount() {
      console.log("Header un-mounted...")
  },

  render() {
    return (
      <div className='header center'>
        <h1>Honeypot Client</h1>
        <h2>Server data from {this.props.text}</h2>
      </div>
    )
  }
})
