/**
 * Filename: 'app-store.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Contains state logic for app
 */

import { EventEmitter } from 'events'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import AppActions from '../actions/app-actions'
import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

const CHANGE_EVENT = 'change'

var _data = null

var _list = []

const _removeItem = ( item ) => {
  _list.splice( _list.findIndex( i => i.index === item.index ), 1 )

}

const _findListItem = ( item ) => {
  return _list.find( listItem => listItem.index === item.index )
}

const _addItem = ( item ) => {
    _list.push( item )
}

const _listTotals = ( total = 0 ) => {
    _list.forEach( listItem => {
        total += 1
    })
    return total
}

const _requestServerData = ( obj ) => {
    var serverRequest = _fetchData( obj.url )
    serverRequest.then( ( data ) => {
        _data = data
        AppStore.emitChange()
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

    getServerData() {
        return _data
    },

    getList() {
        return _list
    },

    getListTotals() {
      return _listTotals()
    },

    // Needs wprk ... Based of of app-constants.js
    dispatcherIndex: register( function( payload ) {
        switch( payload.actionType ){
            case AppConstants.REQUEST_DATA_ASYNC:
                console.log( "REQUESTING_DATA_ASYNC:", payload )
                _requestServerData( payload )
                break
            case AppConstants.ADD_ITEM_TO_LIST:
                console.log( "ADD_ITEM_TO_LIST:", payload.item )
                _addItem( payload.item )
                console.log("List:", _list)
                break
            case AppConstants.REMOVE_ITEM_FROM_LIST:
                console.log( "REMOVE_ITEM_FROM_LIST:", payload.item )
                _removeItem( payload.item )
                break
        }
        AppStore.emitChange()
    })
  
})

export default AppStore
