/**
 * Filename: 'app-footer.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App footer stateless component
 */

import AppConstants from '../constants/app-constants'
import { dispatch, register } from '../dispatchers/app-dispatcher'

export default {

	addItemToList( item ) {
		dispatch({
			actionType:AppConstants.ADD_ITEM_TO_LIST, item
		})
	},

	removeItemFromList( item ) {
		dispatch({
			actionType: AppConstants.REMOVE_ITEM_FROM_LIST, item
		})
	},

	updateSearchType( value ) {
		dispatch({
			actionType: AppConstants.UPDATE_SEARCH_TYPE, value
		})
	},

	updateSearchTerm( value ) {
		dispatch({
			actionType: AppConstants.UPDATE_SEARCH_TERM, value
		})
	},

	setShowSearch( bool ) {
		dispatch({
			actionType: AppConstants.SET_SHOW_SEARCH, bool
		})
	},

}