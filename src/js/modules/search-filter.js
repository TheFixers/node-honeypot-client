/**
 * Searh filter
 */
const hasKey = ( item, key ) => {
	return item.hasOwnProperty( key )
}

const typeMatchesTerm = ( item, type, term ) => {

	if ( type || term ) {
		let regex = new RegExp( term, "gi" )
		return regex.test( item[type] )
	} else {
		return true
	}
	
}

export default ( item, type, term ) => {
    return typeMatchesTerm( item, type, term )
}



