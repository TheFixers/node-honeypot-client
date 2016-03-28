const ListAPI = {
    //catalog: [],
    data: [],

    removeItem( item ) {
        this.data.splice( this.data.findIndex( i => i === item ), 1 )
    },

    findDataItem( item ) {
        return this.data.find( dataItem => dataItem.id === item.id )
    },

    addItem( item ) {
        const dataItem = this.findDataItem( item )
        if ( !dataItem ) {
            this.data.push( Object.assign( {}, item ) )
        }
        else {
            this.increaseItem( dataItem )
        }
    },

    dataTotals( qty = 0 ) {
        this.data.forEach(dataItem  => {
            qty += 1
        })
        return qty
    },

    getDataItems() {
        return this.data.map(item => {
            return Object.assign(
                {}, 
                item, this.data.find(dataItem => dataItem.id === item.id)
            )
        })
    },

    // TODO: Remove this... (temp)
    init() {
        for ( let i = 1; i < 20; i++ ) {
            this.data.push(
                {
                    'id': i,
                    'ip': '127.0.0.' + i,
                    'username': (i % 2 === 0) ? 'Josh' : 'Stephen',
                    'passwords': 'test1234',
                    'description': 'Lorem ipsum dolor sit amet.',
                    'index': i,
                    'date': new Date().getTime()
                } 
            )
        }
    }

}

ClientDataAPI.init()

export default ClientDataAPI
