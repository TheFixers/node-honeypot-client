const SEARCHTYPE = {
  ALL :       {NAME: 'ALL',       index: 0, target: "all"}, 
  INDEX :     {NAME: 'INDEX',     index: 1, target: "index"}, 
  IP :        {NAME: 'IP',        index: 2, target: "ip"}, 
  ID :        {NAME: 'ID',        index: 3, target: "id"}, 
  USERNAME:   {NAME: 'USERNAME',  index: 4, target: "username"},
  PASSWORDS : {NAME: 'PASSWORDS', index: 5, target: "passwords"}, 
  DATA :      {NAME: 'DATA',      index: 5, target: "data"}, 
  KEY :       {NAME: 'KEY',       index: 6, target: "key"}, 
  TIME :      {NAME: 'TIME',      index: 7, target: "time"}, 
  PORT :      {NAME: 'PORT',      index: 8, target: "port"}, 
  SOCKET :    {NAME: 'SOCKET',    index: 9, target: "socket"} 
}
export default SEARCHTYPE