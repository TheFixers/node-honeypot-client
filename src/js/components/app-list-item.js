/**
 * Filename: 'app-list-item.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list item component
 */
import React from 'react'
import AppActions from '../actions/app-actions'

export default ( props ) => {
    console.log("Item: ", props.item)
    let styles = {
        border: 'solid 1px #ccc',
        width: '60%',
        marginTop: '20px',
        marginLeft: '20%',
        marginRight: '20%'
    }

    let buttonStyles = {
        margin: '5px'
    }

    if ( props && props.item) {
        var rows = Object.keys( props.item ).map( (key, index) => {
            return <Row 
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

const Row = ( props ) => {

    console.log( props.field )

    if ( props.field === 'index' ){
        return (
            <tr className="row">
                <th className="col-md-4"><b>{ props.field.capFirst() }</b></th>
                <td className="col-md-8 text-left"><b>{ props.value }</b></td>
            </tr>
        )
    } else {
        return (
            <tr className="row">
                <th className="col-md-4"><b>{ props.field }</b></th>
                <td className="col-md-8 text-left">{ props.value }</td>
            </tr>
        )
    }


    
}

String.prototype.capFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}