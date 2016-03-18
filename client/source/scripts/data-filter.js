import DataItemCreator from './data-item-object-creator.js'
import matchesQuery from './data-matches-query.js'

export default (data, searchType, searchTerm) => {

    let dataItems = new Array()

    for (var item in data) {
        
        let dataItem = null
        let index = Object.keys(data).indexOf(item)

        try {
            let json = JSON.parse(data[item])
            dataItem = DataItemCreator(json, index)
        } catch (e) {
            console.error(e.message)
        }

        if (dataItem) dataItems.push(dataItem)
    }

    let queryMatches = []

    for (var item in dataItems) {
         if (matchesQuery(dataItems[item], searchType, searchTerm)) {
            queryMatches.push(dataItems[item])
         }
    }
   
    return queryMatches
}