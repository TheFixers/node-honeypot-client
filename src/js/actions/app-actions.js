import AppConstants from '../constants/app-constants'
import { dispatch, register } from '../dispatchers/app-dispatcher'

export default {
	requestDataAsync( url ) {
		dispatch({
			actionType:AppConstants.REQUEST_DATA_ASYNC, url
		})
	},

	requestDataSuccess( data ) {
		dispatch({
			actionType:AppConstants.REQUEST_DATA_SUCCESS, data
		})
	},

	requestDataFailure( err ) {
		dispatch({
			actionType:AppConstants.REQUEST_DATA_FAILURE, err
		})
	},

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

	updateSearchType( type ) {
		dispatch({
			actionType: AppConstants.UPDATE_SEARCH_TYPE, type
		})
	},

	updateSearchTerm( term ) {
		dispatch({
			actionType: AppConstants.UPDATE_SEARCH_TERM, term
		})
	},

	showItem( item ) {
		dispatch({
			actionType: AppConstants.SHOW_ITEM, item
		})
	},

	showList( list ) {
		dispatch({
			actionType: AppConstants.SHOW_LIST, list
		})
	}

}