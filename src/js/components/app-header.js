import React from 'react'
import SearchArea from './app-search'

export default () => {
    let styles = {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        float: 'left',
        margin: '10px',
        marginTop: '20px'
    }
    let stylesGitHub = {
        width: '40px',
        height: '40px',
        marginTop: '15px'
    }
    return (

        <div className="row" style={ {borderBottom: '2px solid #ccc'} }>
            <div className="col-sm-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles }></img>
            	<h1>Honeypot Client</h1>
            </div>
            <div className="col-sm-7">
                <SearchArea />
            </div>
            <div className="col-sm-1">
                <a href="http://github.com/TheFixers/node-honeypot-client" target="blank">
                    <img 
                      src="http://static.wixstatic.com/media/94f355_8ef96f732b7146c1828dc5e474bf770f.gif"
                      style={ stylesGitHub }>
                    </img>
                </a>
            </div>
        </div>
    )
}
