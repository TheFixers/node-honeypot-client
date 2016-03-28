import React from 'react'
import SearchArea from './app-search-area-component'

export default () => {
    let iconStyle = {
        marginTop: '20px',
        width: '50px',
        height: '30px',
        border: 'solid 1px #ccc',
        borderRadius: '3px',
        marginLeft: '3px'
    }
    return (
        <div className="row" style={{borderBottom: '2px solid #ccc'}}>
            <div className="col-sm-4 text-left">
            	<h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-8">
                <SearchArea />
            </div>
        </div>
    )
}
