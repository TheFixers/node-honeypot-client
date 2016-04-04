/**
 * Filename: 'app-search.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App search area component
 */
import React from 'react'
import AppStore from '../../stores/app-store'
import AppActions from '../../actions/app-actions'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'

const getSearchParams = () => {
    return { search: AppStore.getSearchParams() }
}

const updateSearchType = ( event ) => {
	AppActions.updateSearchType( event.target.value  )
}

const updateSearchTerm = ( event ) => {
	AppActions.updateSearchTerm( event.target.value )
}

const AppSearch = ( props ) => {
	
	var styles = {
		width: '150px',
		background: 'transparent',
		height: '30px',
		margin: '5px',
		marginTop: '20px',
		padding: '5px',
		border: 'solid 1px #666',
		borderRadius: '3px'
	}

	let type = props.search.type
	let term = props.search.term 
	
	// TODO: (temp) Remove me...
	if ( type || term ) {
		console.log( "TYPE:", props.search.type )
		console.log( "TERM:", props.search.term )
	}
	

    return (
    	<div className='search-area text-right'>
    		<i className="glyphicon glyphicon-search"></i> 
	    	<select 
	    	    className='select' 
	    	    style={ styles } 
	    	    defaultValue="title"
	    	    onChange={ updateSearchType.bind( this ) }>
	    		<option value='title' disabled>Search by</option>
	    		<option>Show All</option>
	    		<option>Index</option>
	    		<option>IP Address</option>
	    		<option>User ID</option>
	    		<option>Username</option>
	    		<option>Passwords</option>
	    		<option>Client URL</option>
	    		<option>Port</option>
	    		<option>Socket</option>
	    	</select>
	    	<input 
	    	    className='input' 
	    	    type="text" 
	    	    placeholder='Search for...' 
	    	    style={ styles } 
	    	    onChange={ updateSearchTerm.bind( this ) } />
	    	<br/>
        </div>
    )
}

export default StoreWatchMixin( AppSearch, getSearchParams )