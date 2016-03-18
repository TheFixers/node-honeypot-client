export default (item, searchType, searchTerm) => {
    if (searchTerm === null || searchTerm === "" || searchType === "ALL") {
        return true
    } else {
        switch (searchType) {
            case "ALL": 
                return true
                break
            case "INDEX": 
                if (item.index.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "IP": 
                if (item.ip.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "ID": 
                if (item.id.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "USERNAME": 
                if (item.username.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "PASSWORDS": 
                if (item.passwords.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "DATA": 
                if (item.data.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "KEY": 
                if (item.key.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "TIME": 
                if (item.time.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
            case "PORT": 
                if (item.port.toString() == searchTerm) {
                    return true
                } else {
                    return false
                }
                break
        }
    }
}
