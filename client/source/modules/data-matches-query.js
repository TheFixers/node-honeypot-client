export default (item, searchType, searchTerm) => {

    if (searchTerm === null || searchTerm === "" || searchType === "ALL") {
        return true
    } else {
        let regex = new RegExp(searchTerm, "g")
        switch (searchType) {
            case "ALL": 
                return true
            case "INDEX": 
                // Note: This one matches whole term to whole text
                if (item.index === searchTerm) {
                    return true
                }
                break
            case "IP": 
                if (item.ip.match(regex)) {
                    return true
                }
                break
            case "TYPE": 
                if (item.type.match(regex)) {
                    return true
                }
                break
            case "ID": 
                if (item.id.match(regex)) {
                    return true
                }
                break
            case "USERNAME": 
                if (item.username.match(regex)) {
                    return true
                }
                break
            case "PASSWORDS": 
                if (item.passwords.match(regex)) {
                    return true
                }
                break
            case "DATA": 
                if (item.data.match(regex)) {
                    return true
                }
                break
            case "KEY": 
                if (item.key.match(regex)) {
                    return true
                }
                break
            case "TIME": 
                if (item.time.match(regex)) {
                    return true
                }
                break
            case "PORT": 
                if (item.port.match(regex)) {
                    return true
                }
                break
        }
        return false
    }
}