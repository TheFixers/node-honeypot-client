import React from 'react'

export default React.createClass({

	displayName: 'Header Component',

	propTypes: {
		source: React.PropTypes.string.isRequired
	},

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
				<h2>Server data@ 
					<a href={this.props.source}>
						{this.props.source}
					</a>
				</h2>
			</div>
		)
	}
})