/**
 * Search option
 */
 import React from 'react'

const SearchOption = ( props ) => {
	return  <option 
	            key={ props.key } 
	            display={ props.display } 
	            field={ props.field }>
	        { props.display } 
	        </option>
}

export default SearchOption