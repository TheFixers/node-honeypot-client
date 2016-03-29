/**
 * Author: Joshua Michael Waggoner <rabbitfighter@cryptolab.net>
 * Client Data API that contains code for maintaning server data logic
 */

import SOURCE from '../static/SourceURL'
import fetch from '../modules/fetch-data-promise'

const ClientDataAPI = {

    _url: SOURCE,
    
    _data: [],

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
    init(data) {
        for ( let i = 1; i < data.length; i++ ) {
            this._data.push( data[i] )
            console.log( data[i] )
        }
        console.log(this._data)
    }

}

console.log("Is this even running???")

var fakeData = [
    {"_id":{"$oid":"56ee34b484f4236156936b75"},"Client":{"IP":"127.0.0.1","TYPE":"HTTP","Port":"80","Socket":"44902","Data":{"clientURL":"/","Time":"1458451637.0"}}},
    {"_id":{"$oid":"56ee34b584f4236156936b76"},"Client":{"IP":"127.0.0.1","TYPE":"HTTP","Port":"80","Socket":"44906","Data":{"clientURL":"/favicon.ico","Time":"1458451637.42"}}},
    {"_id":{"$oid":"56ee357284f4236156936b77"},"Client":{"IP":"127.0.0.1","TYPE":"SSH","Port":"22","Socket":"34094","Data":{"Username":"stephen","Passwords":"hrygtg uuiyu ikyuy ","Key":"3384b3f1fb08f5459f771200cab1faf9","Time":"1458451818.26"}}},
    {"_id":{"$oid":"56ee385a84f4236156936b78"},"Client":{"IP":"127.0.0.1","TYPE":"Telnet","Port":"23","Socket":"36900","Data":{"Username":"yjtty","Passwords":"ikujuyijyu","Data":"ytrgtt || yjt || i8kyu || oui || ilo","Time":"1458452551.54"}}},
    {"_id":{"$oid":"56ef45a5d37f4245fc989f87"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55221","Data":{"clientURL":"/","Time":"1458521509.72"}}},
    {"_id":{"$oid":"56ef45a6d37f4245fc989f88"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55222","Data":{"clientURL":"/","Time":"1458521510.03"}}},
    {"_id":{"$oid":"56ef45a6d37f4245fc989f89"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55223","Data":{"clientURL":"/","Time":"1458521510.09"}}},
    {"_id":{"$oid":"56ef45a6d37f4245fc989f8a"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55224","Data":{"clientURL":"/","Time":"1458521510.15"}}},
    {"_id":{"$oid":"56ef45a7d37f4245fc989f8b"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55227","Data":{"clientURL":"/","Time":"1458521511.18"}}},
    {"_id":{"$oid":"56ef45b6d37f422d1cc42d23"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55237","Data":{"clientURL":"/","Time":"1458521526.67"}}},
    {"_id":{"$oid":"56ef45b6d37f422d1cc42d24"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55236","Data":{"clientURL":"/","Time":"1458521526.97"}}},
    {"_id":{"$oid":"56ef45b7d37f422d1cc42d25"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55238","Data":{"clientURL":"/","Time":"1458521527.03"}}},
    {"_id":{"$oid":"56ef45b7d37f422d1cc42d26"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55239","Data":{"clientURL":"/","Time":"1458521527.09"}}},
    {"_id":{"$oid":"56ef45b8d37f422d1cc42d27"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55242","Data":{"clientURL":"/","Time":"1458521528.12"}}},
    {"_id":{"$oid":"56ef45b9d37f422d1cc42d28"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"55244","Data":{"clientURL":"/","Time":"1458521529.15"}}},
    {"_id":{"$oid":"56f57faeeca5df10a64510c8"},"Client":{"IP":"127.0.0.1","TYPE":"HTTP","Port":"80","Socket":"45036","Data":{"clientURL":"/","Time":"1458929582.36"}}},
    {"_id":{"$oid":"56f57faeeca5df10a64510c9"},"Client":{"IP":"127.0.0.1","TYPE":"HTTPS","Port":"4443","Socket":"34702","Data":{"clientURL":"/","Time":"1458929582.38"}}},
    {"_id":{"$oid":"56f8292dc37126115dc73d93"},"Client":{"IP":"183.3.202.108","TYPE":"SSH","Port":"22","Socket":"63115","Data":{"Username":"","Passwords":"","Key":null,"Time":"1459104044.35"}}},
    {"_id":{"$oid":"56f8297dc3712611c1547d67"},"Client":{"IP":"50.155.138.38","TYPE":"SSH","Port":"22","Socket":"63432","Data":{"Username":"","Passwords":"","Key":null,"Time":"1459104116.66"}}},
    {"_id":{"$oid":"56f82a8ac3712611ef0a9803"},"Client":{"IP":"192.168.0.10","TYPE":"SSH","Port":"22","Socket":"63558","Data":{"Username":"","Passwords":"","Key":null,"Time":"1459104385.02"}}},
    {"_id":{"$oid":"56f82aacc3712611ef0a9804"},"Client":{"IP":"192.168.0.10","TYPE":"SSH","Port":"22","Socket":"63560","Data":{"Username":"","Passwords":"","Key":null,"Time":"1459104427.73"}}}

]

ClientDataAPI.init(fakeData)

export default ClientDataAPI
