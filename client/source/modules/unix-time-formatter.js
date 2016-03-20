import moment from 'moment'

const FORMAT = "MMM Do, YYYY hh:mm:ss A"

export default (timestamp) => {
	try {
		return moment.unix(timestamp).format(FORMAT)
	} catch(err) {
		console.error(err.message)
	}
	return "Unknown"
}