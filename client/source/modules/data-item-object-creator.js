import timeFormatter from './unix-time-formatter.js'

const notFound = "[no data]"

let ServerDataItem = function(data, index) {
    
    this.index = index.toString()
    this.ip = notFound
    this.type = notFound
    this.username = notFound
    this.passwords = notFound
    this.data = notFound
    this.id = notFound
    this.key = notFound
    this.time = notFound
    this.port = notFound
    this.socket = notFound

    if (data.Client && data.Client.IP) {
        this.ip = data.Client.IP.toString()
    }

    if (data.Client && data.Client.Data && data.Client.Data.Username) {
        this.username = data.Client.Data.Username.toString()
    }
    
    if (data.Client && data.Client.TYPE) {
        this.type = data.Client.TYPE.toString()
    }
    
    if (data.Client && data.Client.Data && data.Client.Data.Passwords) {
        this.passwords = data.Client.Data.Passwords.toString()
    }

    if (data.Client && data.Client.Data && data.Client.Data.Data) {
        this.data = data.Client.Data.Data.toString()
    }

    if (data._id && data._id.$oid) {
        this.id = data._id.$oid.toString()
    }

    if (data.Client && data.Client.Data && data.Client.Data.Key) {
        this.key = data.Client.Data.Key.toString()
    }

    if (data.Client && data.Client.Data && data.Client.Data.Time) {
        this.time = timeFormatter(data.Client.Data.Time)
    }

    if (data.Client && data.Client.Port) {
        this.port = data.Client.Port.toString()
    }

    if (data.Client && data.Client.Socket) {
        this.socket = data.Client.Socket.toString()
    }

}

export default (data, index) => {
    return new ServerDataItem(data, index)
}