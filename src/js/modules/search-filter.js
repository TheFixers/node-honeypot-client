/**
 * Filename: 'search-filter.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App search filter
 */

const _filtered = ( item, type, term ) => {
	// If no type or term selected or type is ALL. show all
	if ( !type || !term || type === 'ALL' ) {
		return true
    } 
    // Index is a special case where it's a number not a string...
    if ( type == 'Index') {
        return term === item.index.toString()
    }
    // If an item has the sspecified type, run regex test
  	if ( !item.hasOwnProperty( type ) ) {
  		return false
  	} else {
  		let regex = new RegExp( term, "gi" )
    	return regex.test( item[type] )
  	}
}

export default ( item, type, term ) => {
    return _filtered( item, type, term )
}



