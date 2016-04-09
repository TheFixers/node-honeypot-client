/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Data API that contains code for maintaning user list logic and states
 */
import AppStore from '../stores/app-store'
import _parser from '../modules/data-items-parser'
import _fetchData from '../modules/fetch-data-promise'
import _filtered from '../modules/search-filter'
import SOURCE from '../static/SourceURL'

const DataAPI = {
    
    data: null,

    filtered: null,

    parsed: null,

    searchType: null,

    searchTerm: null,

    getSearchParams() {
       return  { type: this.searchType, term: this.searchTerm }
    },

    findItem( id ) {
        if ( this.data ) {
            for ( let i = 0; i < this.data.length; i++ ) {
                if ( this.data[i].id === id ) {
                    return this.data[i]
                }
            }
        }
    },

    getData() {
        return this.data
    },

    getParsed() {
        return this.parsed
    },

    requestServerData( obj ) {
        var serverRequest = _fetchData( obj )
        serverRequest.then( ( data ) => {
            this.data = data
            this.parsed = _parser( this.data )
            AppStore.emitChange()

        })
        .catch( ( err ) => {
            console.log( err.message )
        })
    },

    updateSearchType( action ) {
        this.searchType = action.type
    },

    updateSearchTerm( action ) {
        this.searchTerm = action.term
    }

}

DataAPI.requestServerData( SOURCE )
/*setInterval( () => {
    DataAPI._requestServerData( SOURCE )
    console.log("Requesting info from server... Delay of 10 sec...")
}, 10000)*/

export default DataAPI
