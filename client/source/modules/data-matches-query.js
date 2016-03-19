export default (item, searchType, searchTerm) => {
    if (searchTerm === null || searchTerm === "" || searchType === "ALL") {
        return true
    } else {
        let regex = new RegExp(searchTerm, "g")
        switch (searchType) {
            case "ALL": 
                return true
                break
            case "INDEX": 

                if (item.index === searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "IP": 
                if (item.ip.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "ID": 
                if (item.id.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "USERNAME": 
                if (item.username.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "PASSWORDS": 
                if (item.passwords.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "DATA": 
                if (item.data.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "KEY": 
                if (item.key.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "TIME": 
                if (item.time.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
            case "PORT": 
                if (item.port.match(regex)) {
                    return true
                } else {
                    return false
                }
                break
        }
    }
}
