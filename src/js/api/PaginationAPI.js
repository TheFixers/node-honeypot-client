/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Pagination API that contains code for maintaning pagination logic and states
 */

const PaginationAPI = {

	_pageSize: 10,

	_totalResults: null,

	_totalPages: null,

	_previousPage: null,
    
    _currentPage: 0,

    _nextPage: null,

    _jumpToPage( page ) {
    	this._currentPage = page
    },

    

    _getPage() {
        return this._currentPage
    },

    _getPageSize() {
        return this._pageSize
    },

     _getPageOffset() {
    	return (this._currentPage !== 0 ) ? this._currentPage * this._pageSize : 0
    },

    hasPrevPage() {
    	return this._currentPage > 0 
    },

    hasNextPage() {
    	return this._currentPage < this._totalPages 
    },

    moveToNext() {
        if ( hasNextPage() ) {
        	this._currentPage++
        }
    },

    moveToPrev() {
        if ( hasPrevPage() ) {
        	this._currentPage--
        }
    },

    _getInfo() {
    	return Object.assign( { page: 1, pageSize: 10 } )
    }
}

export default PaginationAPI