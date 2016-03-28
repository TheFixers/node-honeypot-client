const SearchAPI = {
    
    // Results array
    results: [],

    // Use findIndex() to locate and splice out item from results
    removeItem( item ) {
        this.results.splice( this.results.findIndex( i => i === item ), 1 )
    },

    // Use es6 find() to get matching id to passed in 'item'
    findItem( item ) {
        return this.results.find( resultItem => resultItem.id === item.id )
    },

    // Push item object into array
    addItem( item ) {
        this.results.push( Object.assign( {}, item ) )
    },

    // Returns number of results
    numResults( qty = 0 ) {
        this.results.forEach(resultItem  => {
            qty += 1
        })
        return qty
    },

    // Returns an object of all items
    getResultItems() {
        return this.results.map(item => {
            return Object.assign(
                {}, 
                item, this.results.find(resultItem => resultItem.id === item.id)
            )
        })
    },

    // TODO: Remove this... (temp)
    init() {
        for ( let i = 1; i < 20; i++ ) {
            this.results.push(
                {
                    'id': i,
                    'ip': '127.0.0.' + i,
                    'username': (i % 2 === 0) ? 'Josh' : 'Stephen',
                    'passwords': 'test1234',
                    'description': 'Lorem ipsum dolor sit amet.',
                    'index': i,
                    'timestamp': new Date().getTime()
                } 
            )
        }
    }

}

// Initialize
SearchAPI.init()

// Export Search API
export default SearchAPI
