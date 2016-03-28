import React from 'react'

export default (props) => {
	let styles = {
		borderBottom: 'solid 1px #ccc',
		width: 'auto',
		marginTop: '10px'
	}
    return (
        <div className="result" style={styles}>
         	<strong>{props.txt}</strong> stephen@10.0.0.1
        </div>
    )
}
