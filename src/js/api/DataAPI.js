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
    }

}

DataAPI._requestServerData( SOURCE )

export default DataAPI
