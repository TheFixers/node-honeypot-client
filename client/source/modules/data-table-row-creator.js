export default (props) => {
    return [
        {name: "index",     value: props.index},
        {name: "id",        value: props.clientId},   
        {name: "type",      value: props.clientType},
        {name: "ip" ,       value: props.clientIp},
        {name: "username",  value: props.clientUsername},
        {name: "passwords", value: props.clientPasswords},
        {name: "data",      value: props.clientData},
        {name: "key",       value: props.clientKey},
        {name: "time",      value: props.clientTime},
        {name: "port",      value: props.clientPort},
        {name: "socket",    value: props.clientSocket}
    ]
}
