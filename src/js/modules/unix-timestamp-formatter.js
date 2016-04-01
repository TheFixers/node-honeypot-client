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