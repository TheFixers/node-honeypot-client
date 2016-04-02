/**
 * Filename: 'app-list.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list component
 */
import React from 'react'
import AppStore from '../../stores/app-store'
import AppListItem from './app-list-item'
import AppActions from '../../actions/app-actions'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'


const getList = () => {
    return { items: AppStore.getList() } 
}

const AppList = ( props ) => {

    var items = props.items.map( ( item, index ) => {
        return ( 
            <AppListItem 
                key={index} 
                index={index} 
                id={item.id} 
                item={item} />
        )
    })

    return (
        <div className="table text-center">
            <h2>Showing { items.length } items</h2>
            <br />
            { items }
        </div>
    )
    
}

export default StoreWatchMixin( AppList, getList )
