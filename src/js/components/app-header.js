import React from 'react'
import SearchArea from './app-search'
import ListButton from './app-list-button'

export default () => {
    let styles = {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        float: 'left',
        margin: '10px',
        marginTop: '20px'
    }

    let buttonStyles = {
        width: 'auto',
        height: 'auto',
        marginTop: '18px',
    }
    return (

        <div className="row" style={ {borderBottom: '2px solid #ccc'} }>
            <div className="col-sm-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles } />
            	<h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-7">
                <SearchArea />
            </div>
            <div className="col-sm-1">
                <button 
                    className="btn btn-info" 
                    type="button" text="Show List" 
                    style={buttonStyles} 
                    onClick="">
                    <i className="glyphicon glyphicon-user" aria-hidden="true" /> My List
                </button>

            </div>
        </div>
    )
}
