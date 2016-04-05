/**
 * Filename: 'app-search.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App search area component
 */
import React from 'react'
import AppStore from '../../stores/app-store'
import AppActions from '../../actions/app-actions'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import SearchTypes from '../../static/SearchTypes'

const getSearchParams = () => {
    return { search: AppStore.getSearchParams() }
}

const updateSearchType = ( event ) => {
	let type = event.target.options[event.target.selectedIndex].dataset.field 
	AppActions.updateSearchType( type )
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
	
	let options = Object.keys(SearchTypes).map( ( item, index ) => {
		let searchItem = SearchTypes[item]
		return <option 
		           key={ index } 
		           index={ searchItem.index }
		           data-field={ searchItem.field } 
		           data-display={ searchItem.display }>
	           { searchItem.display } 
	           </option>
	})

	let input = null 

	if ( type !== null && type !== 'ALL') {
		input = <input 
		    	    className='input' 
		    	    type="text" 
		    	    placeholder='Search for...' 
		    	    style={ styles } 
		    	    onChange={ updateSearchTerm.bind( this ) }>
		    	</input>
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
	    	    { options }
	    	</select>
	    	{ input }
	    	<br/>
        </div>
    )
    
}

export default StoreWatchMixin( AppSearch, getSearchParams )