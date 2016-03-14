const notFoundMsg = null

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
