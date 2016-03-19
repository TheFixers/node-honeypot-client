const SEARCHTYPE = {
  ALL:       {name: 'ALL',       index: 0, target: "all",       text: "Show All"}, 
  INDEX:     {name: 'INDEX',     index: 1, target: "index",     text: "Index"}, 
  IP:        {name: 'IP',        index: 2, target: "ip",        text: "IP"}, 
  ID:        {name: 'ID',        index: 3, target: "id",        text: "ID"}, 
  USERNAME:  {name: 'USERNAME',  index: 4, target: "username",  text: "Username"},
  PASSWORDS: {name: 'PASSWORDS', index: 5, target: "passwords", text: "Passwords"}, 
  DATA:      {name: 'DATA',      index: 5, target: "data",      text: "Data"}, 
  KEY:       {name: 'KEY',       index: 6, target: "key",       text: "Key"}, 
  TIME:      {name: 'TIME',      index: 7, target: "time",      text: "Time"}, 
  PORT:      {name: 'PORT',      index: 8, target: "port",      text: "Port"}, 
  SOCKET:    {name: 'SOCKET',    index: 9, target: "socket",    text: "Socket"} 
}
export default SEARCHTYPE