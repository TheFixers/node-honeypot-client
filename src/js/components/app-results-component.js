import React from 'react';
import AppStore from '../stores/app-store'
import StoreWatchMixin from '../mixins/StoreWatchMixin'
import DataItem from './app-data-item-component'

function getCatalog() {
    return {items: AppStore.getResults()}
}

const Catalog = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <CatalogItem key={ item.id } item={ item } />
    } )
    return (
        <div className="row">
            { items }
        </div>
    )
}

//export default StoreWatchMixin( Catalog, getCatalog )
