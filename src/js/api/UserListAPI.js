/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * List API that contains code for maintaning user list logic and states
 */

const UserListAPI = {
    
    // Pivate list (array of list items)
    _list: [],

    // Push item object into array
    addItem( item ) {
        this._list.push( Object.assign( {}, item ) )
    },

    // Use findIndex() to locate and splice out item from results
    removeItem( item ) {
    	this._list.splice( this._list.findIndex( i => i === item ), 1 )
    },

    // Initialize with dummy data. TODO: Replace with actual data!
    init() {
 
    }
}

// Initialize with data
UserListAPI.init()

// Export
export default UserListAPI
