import React from 'react'
import Header from './header-component.js'
import jQuery from 'jquery'
import fetch from '../scripts/promise-fetch-server-data.js'


export default React.createClass({
  
  displayName: 'App',

  getInitialState() {
    return {
      clientData: null,
      openIndex: null,
      error: null
    }
  },

  componentDidMount() {
  	  console.log("App un-mounted")
  	  
      var promise = fetch(this.props.source)

      promise.then((data) => {
      	  let clientData = data
          this.setState({
	      	  clientData: clientData,
	      	  error: null
	      })
	      console.log(data)
      })
      .catch((err) => {
      	  this.setState({
          	  clientData: null,
          	  error: err
          })
          console.error(err)
      })
      // Just to display async   
      console.log("Here" + this.state.clientData)
  },

  componentWillUnmount() {
      console.log("App un-mounted")
  },

  render() {
    return (
      <div>
        <Header text={this.props.source} />
        <p>{this.state.clientData}</p>
        <a href={this.props.source}>{this.props.source}</a>.
      </div>
    )
  }
  
})
