/**
 * Filename: 'app-store.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Contains state logic for app
 */

import { EventEmitter } from 'events'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

const CHANGE_EVENT = 'change'

var _data = {}

var _list = []

const _removeItem = ( item ) => {
  _list.splice( _list.findIndex( i => i === item ), 1 )
}

const _findListItem = ( item ) => {
  return _list.find( listItem => listItem.index === item.index )
}

const _addItem = ( item ) => {
    _list.push( Object.assign( {}, item ) )
}

const _listTotals = ( total = 0 ) => {
    _list.forEach( listItem => {
        total += 1
    })
    return total
}

const _setData = ( obj ) => {
    var serverRequest = _fetchData( obj.url )
    serverRequest.then( ( data ) => {
        _data = data
        AppStore.emitChange() // Required b/c of async return...
    })
    .catch( ( err ) => {
        console.log( err.message )
    })
}

const AppStore = Object.assign( EventEmitter.prototype, {
  
    emitChange() {
        this.emit( CHANGE_EVENT )
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback )
    },

    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT, callback )
    },

    getServerData( data ) {
        return _data
    },

    // Needs wprk ... Based of of app-constants.js
    dispatcherIndex: register( function( payload ) {
        switch( payload.actionType ){
            case AppConstants.REQUEST_DATA_ASYNC:
                console.log( "REQUESTING_DATA_ASYNC:", payload )
                _setData( payload )
                break
            case AppConstants.ADD_ITEM_TO_LIST:
                console.log( "ADD_ITEM_TO_LIST:", payload )
                _addItem( payload )
                break
            case AppConstants.REMOVE_ITEM_FROM_LIST:
                console.log( "REMOVE_ITEM_FROM_LIST:", payload )
                _removeItem( payload )
                break
        }
        AppStore.emitChange()
    })
  
})



export default AppStore
