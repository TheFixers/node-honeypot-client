import { EventEmitter } from 'events'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'

import _fetchData from '../modules/fetch-data-promise'
import SOURCE from '../static/SourceURL'

const CHANGE_EVENT = 'change'

var _data = {}

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

  getServerData( data ) {
      return _data
  },

  _setData() {

      var serverRequest = _fetchData( SOURCE )
      
      serverRequest.then( ( data ) => {
          _data = data
          AppStore.emitChange()
      })
      .catch( ( err ) => {
          console.log( err.message )
      })

  },

  

  // Needs wprk ... Based of of app-constants.js
  dispatcherIndex: register( function( payload ) {
      switch( payload.actionType ){
          case AppConstants.REQUEST_DATA_ASYNC:
              console.log( "REQUESTING_DATA_ASYNC:", payload )
              AppStore._setData( payload )
              break
    }

    

    AppStore.emitChange()

  })
  
})



export default AppStore
