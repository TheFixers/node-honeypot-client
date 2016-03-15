import React from 'react'
import Header from './header-component.js'
import Results from './results-area-component.js'
import Footer from './footer-component.js'
import fetch from '../scripts/promise-fetch-server-data.js'

export default React.createClass({

	displayName: 'App',

	propTypes: {
		source: React.PropTypes.string.isRequired
	},

	getInitialState() {
		return {
			clientData: [],
			openIndex: null,
			error: null
		}
	},

	componentDidMount() {
		console.log("App mounted...")

		var promise = fetch(this.props.source)

		promise.then((data) => {
				let clientData = data.trim().split('\n') // Split into array
				this.setState({
					clientData: clientData,
					error: null
				})
			})
			.catch((err) => {
				this.setState({
					clientData: [],
					error: err
				})
				console.error(err)
			})
	},

	componentWillUnmount() {
		console.log("App un-mounted...")
	},

	render() {
		return ( 
			<div>
				<Header source={this.props.source} />
				<Results data={this.state.clientData} /> 
				<Footer source={this.props.source} />
			</div>
		)
	}

})