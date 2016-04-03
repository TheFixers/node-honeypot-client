/**
 * Filename: 'app-list-item.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list item component
 */
import React from 'react'
import AppActions from '../../actions/app-actions'
import AppListItemRow from './app-list-item-row'

const AppListItem = ( props ) => {
    
    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    }

    let buttonStyles = {
        margin: '5px'
    }

    if ( props && props.item) {
        var rows = Object.keys( props.item ).map( (key, index) => {
            return <AppListItemRow 
                style={ styles } 
                key={ index } 
                index={ index }  
                field={ key } 
                value={ props.item[key] } />    
        })
        
        return (
            <div className="">
                <table className="table table-hover table-striped" style={ styles }>
                    <tbody className="">
                        { rows }
                    </tbody>
                </table>
                <button 
                    style={ buttonStyles } 
                    type="button" 
                    className="btn btn-secondary">
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true" />
                </button>
                <button
                    style={ buttonStyles }
                    type="button"
                    className="btn btn-secondary"
                    onClick={ AppActions.removeItemFromList.bind( null, props.item ) }>
                <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                </button>
            </div>
        )
        
    } else {
        return (
            <h4>Nothing in list yet...</h4>
        ) 
    }
}

export default AppListItem

