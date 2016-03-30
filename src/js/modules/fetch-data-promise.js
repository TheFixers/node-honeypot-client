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
                var parsed = []
                data = data.split( '\n' )
                for ( var item in data ) {
                    if ( data.hasOwnProperty( item ) ) {
                        try {
                             //console.log( JSON.parse( data[item] ) )
                             parsed.push( JSON.parse( data[item] ) )
                         } catch ( err ) {
                             //console.error( err )
                         }
                       
                    }  
                }
                resolve( parsed )
            },
            error( xhr, options, err ) {
                reject( err )
            }
        })
    })
}