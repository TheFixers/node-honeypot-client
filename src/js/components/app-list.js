/**
 * Filename: 'app-list.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list component
 */
import React from 'react'
import AppStore from '../stores/app-store'
import AppListItem from './app-list-item'
import AppActions from '../actions/app-actions'


const getList = () => {
    return { items: AppStore.getList() } 
}

class AppList extends React.Component {

    constructor( props ) {
        super( props )
        this.state = getList()
        this._onChange = this._onChange.bind( this )
    }

    componentWillMount() {
        AppStore.addChangeListener( this._onChange )
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange )
        this.serverRequest.abort()
    }

    _onChange() {
        this.setState( getList )
    }

    render() {

        var items = this.state.items.map( ( item, index ) => {
            return ( 
                <AppListItem 
                    key={index} 
                    index={index} 
                    id={item.id} 
                    item={item} />
            )
        })

        return (
            <div className="table">
                <h2>My List</h2>
                <br />
                { items }
            </div>
        )
    }
    
}

export default AppList
