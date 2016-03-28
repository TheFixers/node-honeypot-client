import {dispatch, register} from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import {EventEmitter} from 'events'
import ClientDataAPI from '../api/ClientDataAPI'

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getData(){
    return ClientDataAPI.data
  },

  getTotals(){
    return ClientDataAPI.dataTotals()
  },

  // Needs wprk ... Based of of app-constants.js
  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
                CartAPI.addItem( action.item )
                break;
      case AppConstants.REMOVE_ITEM:
          CartAPI.removeItem( action.item )
          break;

      case AppConstants.INCREASE_ITEM:
          CartAPI.increaseItem( action.item )
          break;

      case AppConstants.DECREASE_ITEM:
          CartAPI.decreaseItem( action.item )
          break;
    }

    AppStore.emitChange()

  })
})

export default AppStore
