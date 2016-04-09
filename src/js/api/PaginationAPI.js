/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Pagination API that contains code for maintaning pagination logic and states
 */

const PaginationAPI = {

    pageSize: 10,

    currentPage: 0,

    getPageSize() {
        return this.pageSize
    },

    getCurrentPage() {
        return this.currentPage
    },

    getOffset() {
        return this.currentPage * this.pageSize
    },

    jumpToPage( page ) {
        this.currentPage = page.index
    }
    
}

export default PaginationAPI