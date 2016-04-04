/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * List API that contains code for maintaning user list logic and states
 */

const ListAPI = {
    
    _list: [],

    _removeItem( item ) {
        this._list.splice( this._list.findIndex( i => i.index === item.index ), 1 )
    },

    _findListItem( item ) {
        return this._list.find( listItem => listItem.index === item.index )
    },

    _addItem( item ) {
        if ( this._findListItem( item ) ) {
            return 
        } else {
            this._list.push( Object.assign( {}, item ) )
        }
    },

    _listTotals( total = 0 ) {
        this._list.forEach( listItem => {
            total += 1
        })
        return total
    }

}

export default ListAPI
