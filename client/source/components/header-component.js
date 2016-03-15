import React from 'react'

export default React.createClass({

	displayName: 'Header Component',

	propTypes: {
		host: React.PropTypes.string.isRequired
	},

	componentDidMount() {
		console.log("Header mounted...")
	},

	componentWillUnmount() {
		console.log("Header un-mounted...")
	},

	render() {
		let text = this.props.host.slice(0, -1)
		return ( 
			<div className="header">
				<h1>Honeypot Client</h1>
				<h2>Server data @ <a href={this.props.host}>{text}</a></h2>
			</div>
		)
	}
})