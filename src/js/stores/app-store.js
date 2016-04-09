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
import _parser from '../modules/data-items-parser'
import ListAPI from '../api/ListAPI'
import DataAPI from '../api/DataAPI'
import PaginationAPI from '../api/PaginationAPI'

const CHANGE_EVENT = 'change'

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
        return DataAPI.getData()
    },

    getParsedData() {
        return DataAPI.getParsed()
    },

    getFiltered() {
        return DataAPI.getFiltered()
    },

    getList() {
        return ListAPI._list
    },

    getListTotals() {
        return ListAPI._listTotals()
        AppStore.emitChange()
    },

    getSearchParams() {
        return DataAPI.getSearchParams()
    },

    getCurrentPage() {
        return PaginationAPI.getCurrentPage()
    },

    getPageSize() {
        return PaginationAPI.getPageSize()
    },

    getOffset() {
        return PaginationAPI.getOffset()
    },

    dispatcherIndex: register( function( payload ) {
        switch( payload.actionType ){
            case AppConstants.ADD_ITEM_TO_LIST:
                ListAPI._addItem( payload.item )
                break
            case AppConstants.REMOVE_ITEM_FROM_LIST:
                ListAPI._removeItem( payload.item )
                break
            case AppConstants.UPDATE_SEARCH_TERM:
                DataAPI.updateSearchTerm( payload )
                break
            case AppConstants.UPDATE_SEARCH_TYPE:
                DataAPI.updateSearchType( payload )
                break
            case AppConstants.JUMP_TO_PAGE:
                PaginationAPI.jumpToPage( payload )
                break
        }
        AppStore.emitChange()
    })
  
})

export default AppStore
