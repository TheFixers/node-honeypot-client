const notFound = "[no data]"

let ServerDataItem = function(data, index) {

    this.index = index
    this.ip = notFound
    this.username = notFound
    this.passwords = notFound
    this.data = notFound
    this.id = notFound
    this.key = notFound
    this.time = notFound
    this.port = notFound
    this.socket = notFound

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
    return new ServerDataItem(data, index)
}