const notFoundMsg = "[no data]"

var Item = function(data, index) {

    this.index = index
    this.ip = notFoundMsg
    this.username = notFoundMsg
    this.passwords = notFoundMsg
    this.data = notFoundMsg
    this.id = notFoundMsg
    this.key = notFoundMsg
    this.time = notFoundMsg
    this.port = notFoundMsg
    this.socket = notFoundMsg

    if (data.Client && data.Client.IP) {
        this.ip = data.Client.IP
    }

    if (data.Client && data.Client.Data && data.Client.Username) {
        this.username = data.Client.Data.Username
    }

    if (data.Client && data.Client.Data && data.Client.Data.Passwords) {
        this.passwords = data.Client.Data.Passwords
    }

    if (data.Client && data.Client.Data && data.Client.Data.Data) {
        this.data = data.Client.Data.Data
    }

    if (data._id && data._id.$oid) {
        this.id = data._id.$oid
    }

    if (data.Client && data.Client.Data && data.Client.Data.Key) {
        this.key = data.Client.Data.Key
    }

    if (data.Client && data.Client.Data && data.Client.Data.Time) {
        this.time = data.Client.Data.Time
    }

    if (data.Client && data.Client.Port) {
        this.port = data.Client.Port
    }

    if (data.Client && data.Client.Socket) {
        this.socket = data.Client.Socket
    }

}

export default (data, index) => { 
    return new Item(data, index)
}
/*
    try {
        this.ip = data.Client.IP.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.username = data.Client.Data.Username.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.id = data._id.$oid.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.passwords = data.Client.Data.Passwords.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.data = data.Client.Data.Data.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.key = data.Client.Data.Key.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.time = data.Client.Data.Time.toString()
    } catch (e) {
        console.error(e.message)
    }

    try {
        this.port = data.Client.Port.toString()
    } catch (e) {
        console.error(e.message)
    }
    try {
        this.socket = data.Client.Socket.toString()
    } catch (e) {
        console.error(e.message)
    }*/