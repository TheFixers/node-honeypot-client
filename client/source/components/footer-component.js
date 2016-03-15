import React from 'react'

export default React.createClass({

	displayName: 'Footer Component',

	componentDidMount() {
		console.log("Footer mounted...")
	},

	componentWillUnmount() {
		console.log("Footer un-mounted...")
	},

	render() {
		return ( 
			<div>
				<footer>
					<a href='#'>[github.com / thefixers]</a>
				</footer>
			</div>
		)
	}
})