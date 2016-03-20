export default (props) => {
    let rows = [
        {name: "index",     value: props.index},
        {name: "id",        value: props.id},   
        {name: "type",      value: props.type},
        {name: "ip" ,       value: props.ip},
        {name: "username",  value: props.username},
        {name: "passwords", value: props.passwords},
        {name: "data",      value: props.data},
        {name: "key",       value: props.userkey},
        {name: "time",      value: props.time},
        {name: "port",      value: props.port},
        {name: "socket",    value: props.socket}
    ]
    return rows
}
