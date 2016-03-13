const notFoundMsg = "No data found"

var Item = function(data) {
	this.ip = notFoundMsg
	this.username = notFoundMsg
	this.passwords = notFoundMsg
	this.id = notFoundMsg
	this.key = notFoundMsg
	this.time = notFoundMsg
	this.port = notFoundMsg
	this.socket = notFoundMsg
	try {
		this.ip = data.Client.IP
	} catch (e) {
		console.error(e.message)
	}

	try {
		this.username = data.Client.Data.Username
	} catch (e) {
		console.error(e.message)
	}

	try {
		this.id = data._id.$oid
	} catch (e) {
		console.error(e.message)
	}

	try {
		this.key = data.Client.Data.Key
	} catch (e) {
		console.error(e.message)
	}

	try {
		this.time = data.Client.Data.Time
	} catch (e) {
		console.error(e.message)
	}

	try {
		this.port = data.Client.Port
	} catch (e) {
		console.error(e.message)
	}
	try {
		this.socket = data.Client.Socket.toString()
	} catch (e) {
		console.error(e.message)
	}
}

export default (data) => {
	if (data) {
		return  new Item(data)
	}
	
}