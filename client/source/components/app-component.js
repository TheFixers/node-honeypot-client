import React from 'react'
import Header from './header-component.js'
import SearchArea from './search-area-component.js'
import Results from './results-area-component.js'
import Footer from './footer-component.js'
import fetch from '../modules/data-items-fetch-promise.js'
import SEARCHTYPES from '../static/search-types.js'

export default React.createClass({

	displayName: 'App',

	propTypes: {
		source: React.PropTypes.string.isRequired,
		protocol: React.PropTypes.string.isRequired,
		host: React.PropTypes.string.isRequired,
		file: React.PropTypes.string.isRequired
	},

	getInitialState() {

		let protocol = this.props.protocol
		let host = this.props.host
		let file = this.props.file

		let source = this._constructSourceUrl(protocol, host, file)

		return {
			source: source,
			protocol: protocol,
			host: host,
			file: file,
			clientData: [],
			logging: true,
			searchTerm: "",
			searchType: SEARCHTYPES.ALL.name
		}
	},

	componentDidMount() {
		console.log("App mounted...")

		var promise = fetch(this.props.source)

		promise.then((data) => {
			let clientData = data.trim().split('\n')
			this.setState({
				clientData: clientData
			})
		})
		.catch((err) => {
			this.setState({
				clientData: []
			})
			console.error(err)
		})
	},

	componentWillUnmount() {
		//console.log("App un-mounted...")
	},

	_constructSourceUrl(protocol, host, file) {
		return String(protocol + host + file)
	},

	_updateSearchTerm(event) {
		let term = event.target.value

		if (this.state.logging) 
			console.log("Search term: \"" + term + "\"")

	    this.setState({
	    	searchTerm: term
	    })
	},

	_updateSearchType(event) {
		let searchType = event.target.value.toUpperCase()

		if (SEARCHTYPES.hasOwnProperty(searchType)) {
			if (this.state.logging)
				console.log("Search type: \"" + searchType + "\"")

			this.setState({
		    	searchType: searchType
		    })

		} else {
			console.error("Search type " + searchType + " is invalid...")
		}
	},

	render() {
        return (
            <div className='react-app-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {
		return ( 
			<div className='react-app-component-container'>

				<Header
					className='app-react-header'
					host={this.state.host}
					source={this.props.source}
					logging={this.state.logging} />

				<SearchArea
					className='app-react-search'
					placeholder="Search for..."
					searchTerm={this.state.searchTerm}
					searchType={this.state.searchType}
					updateSearchTerm={this._updateSearchTerm}
					updateSearchType={this._updateSearchType} />

				<Results
				    searchTerm={this.state.searchTerm}
					searchType={this.state.searchType}
					className='app-react-results'
					data={this.state.clientData} 
					logging={this.state.logging} /> 

				<Footer 
					className='app-react-footer'
					source={this.props.source}
					logging={this.state.logging} />

			</div>
		)
	}

})
