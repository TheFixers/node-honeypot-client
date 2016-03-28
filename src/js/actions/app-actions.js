import AppConstants from '../constants/app-constants'
import {dispatch, register} from '../dispatchers/app-dispatcher'

export default {
	addItemToList(index) {
		dispatch({
			actionType:AppConstants.ADD_ITEM_TO_LIST, index
		})
	},
	removeItemFromList(index) {
		dispatch({
			actionType: AppConstants.REMOVE_ITEM_FROM_LIST, index
		})
	},
	filterData(data) {
		dispatch({
			actionType: AppConstants.FILTER_DATA, data
		})
	},
	showItem(index) {
		dispatch({
			actionType: AppConstants.SHOW_ITEM, index
		})
	}
}