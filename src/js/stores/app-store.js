import {dispatch, register} from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

var _data = []

for (let i = 0; i < 10; i++) {
    _data.push(
        {
            ip: '127.0.0.1',
            id: '12345676543221',
            username: 'joshua'.
            passwords: 'trustno1',
            index: i,
            port: '23',
            socket: '666'
        }
    )
}

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
          ClientDataAPI.addItem( action.item )
          break
      case AppConstants.REMOVE_ITEM:
          ClientDataAPI.removeItem( action.item )
          break

      case AppConstants.INCREASE_ITEM:
          ClientDataAPI.increaseItem( action.item )
          break

      case AppConstants.DECREASE_ITEM:
          ClientDataAPI.decreaseItem( action.item )
          break;
    }

    AppStore.emitChange()

  })
})

export default AppStore
