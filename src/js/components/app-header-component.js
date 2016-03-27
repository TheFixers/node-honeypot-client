import React from 'react'
import SearchArea from './app-search-area-component'

export default () => {
    return (
        <div className="row" style={{borderBottom: '2px solid #ccc'}}>
            <div className="col-sm-4">
            	<h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-8">
                <SearchArea />
            </div>
        </div>
    )
}
