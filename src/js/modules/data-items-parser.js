/**
 * Gets data from JSON and makes an object 
 * for each item that is easier to work with, being 
 * just key/value pairs extracted from nested JSON.
 * This was sooo hard not to go over 80 chars, so plz excuse aming conventions!
 * TODO: Define JSON schema somewhere in parent projects readme for future devs
 */
import _date from './unix-timestamp-formatter'

const errorMsg = "JSON Parser Failure: Data not accordant to JSON scheme..."
const notFound = "[unknown]"

export default function ( items, index = 0 ) {
    if ( Object.keys(items).length === 0 ) return []
    var _items = []
    items.map( ( item ) => {
        let obj = {}
        for ( var field in item ) {
            if ( field === '_id' ) {
                for ( var id in item[field] ) {
                    obj[id] = item[field][id]
                }
            } else if ( field === 'Client' ) {
                for ( var cli in item[field] ) {
                    if ( cli === 'Data' ) {
                        for ( var data in item[field][cli] ) {
                            if (data !== 'Time') {
                                obj[data] = item[field][cli][data]
                            } else {
                                obj[data] = _date(item[field][cli][data])
                            }
                        }
                    } else {
                        obj[cli] = item[field][cli]  
                    }
                }
            } else {
                console.error( "Item skipped", errorMsg )
            }
        }
        if ( !obj.hasOwnProperty('Username') ) {
            obj.Username = notFound
        }
        _items.push( Object.assign( { 'index': index, 'id': obj.$oid }, obj ) )
        index++
    })
    console.log("Hi, im eating up a ton of memory...")
    return _items
}

