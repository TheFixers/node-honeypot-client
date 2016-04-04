/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Data API that contains code for maintaning user list logic and states
 */
import AppStore from '../stores/app-store'
import _parser from '../modules/data-items-parser'
import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

const DataAPI = {
    
    _data: null,

    _parsed: null,

    _searchType: null,

    _searchTerm: null,

    _getSearchParams() {
       return  { type: this._searchType, term: this._searchTerm }
    },

    _findItem( id ) {
        if ( this._data ) {
            for ( let i = 0; i < this._data.length; i++ ) {
                if ( this._data[i].id === id ) {
                    return this._data[i]
                }
            }
        }
    },

    _requestServerData( obj ) {
        var serverRequest = _fetchData( obj )
        serverRequest.then( ( data ) => {
            this._data = data
            this._parsed = _parser( this._data )
            AppStore.emitChange()
        })
        .catch( ( err ) => {
            console.log( err.message )
        })
    },

    _updateSearchType( action ) {
        this._searchType = action.value
    },

    _updateSearchTerm( action ) {
        this._searchTerm = action.value
    }

}

DataAPI._requestServerData( SOURCE )
/*setInterval( () => {
    DataAPI._requestServerData( SOURCE )
    console.log("Requesting info from server... Delay of 10 sec...")
}, 10000)*/

export default DataAPI
