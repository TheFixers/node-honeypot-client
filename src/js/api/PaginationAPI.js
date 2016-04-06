/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Pagination API that contains code for maintaning pagination logic and states
 */

const PaginationAPI = {

	_pageSize: 10,

    _currentPage: 0,

    _jumpToPage( action ) {
    	this._currentPage = action.index
    },

    _getPage() {
        return this._currentPage
    },

    _getPageSize() {
        return this._pageSize
    },

     _getPageOffset() {
    	return (this._currentPage == 0 ) ? 0 : this._currentPage * this._pageSize
    }
    
}

export default PaginationAPI