/**
 * File: data-item-parser.js
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Purpose: Gets data from JSON and makes an object 
 * for each item that is easier to work with, being 
 * just key/value pairs extracted from nested JSON.
 *
 * TODO: Define JSON schema somewhere in parent project...
 */

const successMsg = "JSON Parser Success:"
const errorMsg = "JSON Parser Failure: Data not accordant to JSON scheme..."

export default function (items) {
    var dataItems = []
    items.map( ( item ) => {
        let temp = {}
        for ( var subItem in item ) {
            if ( subItem === '_id' ) {
                for ( var idItem in item[subItem] ) {
                    temp[idItem] = item[subItem][idItem]
                    //console.log(idItem, item[subItem][idItem])
                }
            } else if ( subItem === 'Client' ) {
                for ( var cliItem in item[subItem] ) {
                    
                    if ( cliItem === 'Data' ) {
                        for ( var dItem in item[subItem][cliItem] ) {
                            temp[dItem] = item[subItem][cliItem][dItem]
                            //console.log(dItem, item[subItem][cliItem][dItem])
                        }
                    } else {
                        //console.log(cliItem, item[subItem][cliItem])
                        temp[cliItem] = item[subItem][cliItem]
                    }
                }
            } else {
                console.error("Item skipped", errorMsg)
            }

        }
        dataItems.push( Object.assign( {}, temp ) )
    } )

    if (!dataItems.length > 0) {
        return []
    }
    console.log(successMsg, "Items: " + dataItems.length)
    return dataItems
}

