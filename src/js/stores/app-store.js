import { EventEmitter } from 'events'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
//import UserListAPI from '../api/UserListAPI'
//import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

const CHANGE_EVENT = 'change'

var _data = null

var _list = []

// TODO: Remove me! :)
console.log( "Source:", SOURCE )

const AppStore = Object.assign( EventEmitter.prototype, {
  
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback )
  },

  getServerData() {
      return { data: _data }
  },

  // Needs wprk ... Based of of app-constants.js
  dispatcherIndex: register( function( payload ) {
    switch(payload.actionType){
      case AppConstants.ADD_ITEM_TO_LIST:
          console.log( "Adding item to  list: " , payload)
          break
    }

    AppStore.emitChange()

  })
  
})

export default AppStore
