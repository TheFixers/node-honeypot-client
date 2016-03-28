import React from 'react'

export default (props) => {
	let styles = {
		borderBottom: 'solid 1px #ccc',
		width: '100%'
	}
	let buttonStyles = {
		margin: '10px'
	}
    return (
        <div className="result" style={styles}>
        	<div className="row">
                <div className="col-sm-2">
                    <p>{props.txt}</p>
                </div>
                <div className="col-sm-3">
                    <p>stephen@127.0.0.1</p>
                </div>
                <div className="col-sm-3">
                    <p>Wed Mar 31st, 2016 8:47 PM</p>
                </div>
                <div className="col-sm-4">
                    <button style={buttonStyles} type="button" className="btn btn-secondary">Show info</button>
                    <button style={buttonStyles} type="button" className="btn btn-secondary">Add to list</button>
                </div>
            </div>
        </div>
    )
}
