/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Pagination API that contains code for maintaning pagination logic and states
 */

const PaginationAPI = {

	_maxResultsPerPage: 10,

	_totalResults: null,

	_totalPages: null,

	_previousPage: null,
    
    _currentPage: null,

    _nextPage: null,

    _jumpToPage( page ) {
    	this._currentPage = page
    },

    setMaxResultsPerPage( maxResults ) {
    	this._maxResultsPerPage = maxResults
    },

    setTotalResults( totalResults ) {
    	this._totalResults = numResults
    },

    setTotalPages( totalPages ) {
    	this._totalPages = totalPages
    },

    setCurrentPage( page ) {
    	this._currentPage = page
    },

    getTotalPages() {
        return this._totalPages
    },

    getCurrentPage() {
        return this._currentPage
    },

    getMaxResultsPerPage() {
    	return this._maxResultsPerPage
    },

    getTotalResults() {
    	return this._totalResults
    },

    hasPrevPage() {
    	return this._currentPage > 1 
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

    moveToFirst() {
    	if ( this._currentPage !== 1) {
    		this._currentPage = 1
    	}
    },

    moveToLast() {
    	if ( this._currentPage !== 1) {
    		this._currentPage = _totalPages
    	}
    }
}

export default PaginationAPI