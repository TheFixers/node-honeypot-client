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

    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    } 

    var items = props.items.map( ( item, index ) => {
        return ( 
            <AppListItem 
                key={index} 
                index={index} 
                id={item.id} 
                item={item} />
        )
    })

    let txt = ( items.length === 1 ) ? 'item' : 'items'

    return (
        <div className="table">
            
            <h3 className='list-header text-center' style={ styles }>
            { items.length } { txt } in list
            </h3>
           
            <br />

            { items }

        </div>
    )
    
}

export default StoreWatchMixin( AppList, getList )
