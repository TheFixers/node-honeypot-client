import React from 'react'
import Header from './header-component.js'
import SearchArea from './search-area-component.js'
import Results from './results-area-component.js'
import Footer from './footer-component.js'
import fetch from '../scripts/promise-fetch-server-data.js'


export default React.createClass({

	displayName: 'App',

	propTypes: {
		protocol: React.PropTypes.string.isRequired,
		host: React.PropTypes.string.isRequired,
		file: React.PropTypes.string.isRequired,
		source: React.PropTypes.string.isRequired
	},

	getInitialState() {

		let protocol = this.props.protocol
		let host = this.props.host
		let file = this.props.file

		let source = this._constructSourceUrl(protocol, host, file)

		return {
			source: source,
			host: host,
			clientData: [],
			openIndex: null,
			error: null,
			logging: true,
			searchTerm: ""
		}
	},

	componentDidMount() {
		console.log("App mounted...")

		var promise = fetch(this.props.source)

		promise
			.then((data) => {
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

	_constructSourceUrl(protocol, host, file) {
		return String(protocol + host + file)
	},

	_handleSearch(event) {
		let term = event.target.value
		if (this.state.logging) console.log("Search term: \"" + term + "\"")
	    this.setState({
	    	searchTerm: term //Set max length of 140 chars
	    })
	},

	render() {
		return ( 
			<div className="app-react-container">

				<Header
					className="app-react-header"
					logging={this.state.logging}
					host={this.state.host}
					searchTerm={this.state.searchTerm}
					updateSearch={this._handleSearch} />

				<SearchArea
					className="app-react-search"
					placeholder="Search for..."
					value={this.props.searchTerm}
					updateSearch={this._handleSearch} />

				<Results
					className="app-react-results"
					logging={this.state.logging}
					data={this.state.clientData} /> 

				<Footer 
					className="app-react-footer"
					logging={this.state.logging}
					source={this.props.source} />

			</div>
		)
	}

})
