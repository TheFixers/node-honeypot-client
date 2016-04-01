/**
 * Filename: 'app-list-item.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App list item component
 */
import React from 'react'

export default ( props ) => {
    console.log("Item: ", props.item.item)
    let styles = {
        border: 'solid 1px #ccc',
        width: '100%',
        margin: 'auto'
    }
    if (props && props.item && props.item.item) {
        var items = Object.keys( props.item.item ).map(function (key, index) {
            return <Row 
                style={ styles } 
                key={index} 
                index={index}  
                field={key} 
                value={props.item.item[key] } />    
        })
        if ( items ) {
            return (
                <table className="table table-hover" style={ styles }>
                    <tbody>
                    { items }
                    </tbody>
                </table>
            )
        } else {
            return <h4>Error</h4>
        }
    }
}

const Row = ( props ) => {
    return (
        <tr className="tr">
            <th className="th"><b>{ props.field }</b></th>
            <td className="td">{ props.value }</td>
        </tr>
    )
}