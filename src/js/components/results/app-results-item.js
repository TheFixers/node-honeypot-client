/**
 * Filename: 'app-results-item.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App single results item component
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import { Link } from 'react-router'

export default ( props ) => {
	let styles = {
		borderBottom: 'solid 1px #ccc',
	}

	let buttonStyles = {
		margin: '10px'
	}

	let index = props.index
	let item = props.item
    let txt = props.txt

    /*console.log(props.item.index)*/

    return (
        <div className="result text-center">
        	<div className="row item" style={ styles }>
                <div className="col-md-1">
                    <p><b>{ txt }</b></p>
                </div>
                <div className="col-md-2">
                    <p>{ item.Username }</p>
                </div>
                <div className="col-md-1">
                    <p>{ item.TYPE }</p>
                </div>
                <div className="col-md-2">
                    <p>{ item.IP }</p>
                </div>
                <div className="col-md-1">
                    <p>{ item.Port }</p>
                </div>
                <div className="col-md-3">
                    <p>{ item.Time }</p>
                </div>
                <div className="col-md-2">
                    <Link 
                    to={`/item/${item.id}`} 
                    className="col-md-6"
                    style={ buttonStyles } 
                    type="button" 
                    className="btn btn-secondary">
                        <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
                    </Link>
                    <button
                    className="col-md-6"
                    style={ buttonStyles }
                    type="button"
                    className="btn btn-secondary"
                    onClick={ AppActions.addItemToList.bind( null, props.item ) }>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    )
}
