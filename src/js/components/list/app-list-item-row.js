import React from 'react'

const AppListItemRow = ( props ) => {

    if ( props.field === 'index' ){
        return (
            <tr className="row">
                <th className="col-sm-4"><b>{ props.field.capFirst() }</b></th>
                <td className="col-sm-8 text-left"><b>{ props.value + 1 }</b></td>
            </tr>
        )
    } else {
        return (
            <tr className="row">
                <th className="col-sm-4"><b>{ props.field }</b></th>
                <td className="col-sm-8 text-left">{ props.value }</td>
            </tr>
        )
    }
}

String.prototype.capFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default AppListItemRow