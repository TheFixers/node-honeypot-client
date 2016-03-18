import React from 'react'

export default React.createClass({

	displayName: 'Footer Component',

	componentDidMount() {
		//console.log("Footer mounted...")
	},

	componentWillUnmount() {
		//console.log("Footer un-mounted...")
	},

	render() {
        return (
            <div className='react-footer-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {
		return ( 
			<footer>
				<a href='https://github.com/thefixers' target="_blank">
					Project by [github.com/thefixers]
				</a>
			</footer>
		)
	}
})