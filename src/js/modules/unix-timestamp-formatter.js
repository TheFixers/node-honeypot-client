/**
 * Filename: 'unix-timestamp-formatter.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Uses moment npm package to return pretty dates from unix timestamps
 */

import moment from 'moment'

const FORMAT = "ddd MMM Do, YYYY hh:mm A"

export default ( timestamp ) => {
    try {
        return moment.unix( timestamp ).format( FORMAT )
    } catch( err ) {
        console.error( err.message )
    }
    return "Unknown"
}