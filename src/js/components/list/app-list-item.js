/**
 * Filename: 'app-list-item.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list item component
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import AppListItemRow from './app-list-item-row'
import { Link } from 'react-router'

const AppListItem = ( props ) => {
    
    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    }

    if ( props && props.item ) {

        let item = props.item
        
        var rows = Object.keys( props.item ).map( (key, index) => {
            return <AppListItemRow 
                key={ index } 
                index={ index }  
                field={ key } 
                value={ props.item[key] } />    
        })
        
        return (
            <div className="list-item">
                
                <h3 className='list-item-header text-left' style={ styles }>
                Item { item.index + 1 }
                </h3>

                <br />

                <table className="table table-hover table-striped">
                    <tbody className="">
                        { rows }
                    </tbody>
                </table>
                <div className="list-item-btn-group btn-group">
                    <Link 
                        to="/"
                        type="button" 
                        className="btn btn-secondary">
                        Return to results
                    </Link>
                    <Link 
                        to={`/item/${item.id}`} 
                        className="btn btn-secondary"
                        type="button">
                        View
                    </Link>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={ AppActions.removeItemFromList.bind( null, props.item ) }>
                        Remove from List
                    </button>
                </div>
                <br />
                <br />
                <hr />
            </div>
        )
        
    } else {
        return (
            <h4 className="text-center"></h4>
        ) 
    }
}

export default AppListItem

