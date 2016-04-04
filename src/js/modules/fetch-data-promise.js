/**
 * Filename: 'fetch-data-promise.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Returns a promise to get data from server using jQuery.
 */

import jQuery from 'jquery'

export default ( url ) => {
    return new Promise( ( resolve, reject ) => {
        jQuery.ajax({
            type: 'GET',
            url: url,
            dataType: 'text', // TODO: Find a better solution
            async: true,
            crossDomain: true,
            success( data ) {
                var temp = []
                data = data.split( '\n' )
                for ( var item in data ) {
                    if ( data.hasOwnProperty( item ) ) {
                        try {
                            temp.push( JSON.parse( data[item] ) )
                        } finally {
                            continue
                        }
                    }  
                }
                resolve( temp )
            },
            error( xhr, options, err ) {
                reject( err )
            }
        })
    })
}