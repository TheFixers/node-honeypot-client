import React from 'react'

export default () => {
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
    return (
    	<div className='search-area text-right'>
	    	<select className='select' style={styles} defaultValue="title">
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
	    	<input className='input' type="text" placeholder='Search for...' style={styles}/>
        </div>
    )
}