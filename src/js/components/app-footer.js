/**
 * Filename: 'app-footer.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App footer stateless component
 */
import React from 'react'

export default () => {
    let stylesGitHub = {
        width: '40px',
        height: '40px',
        margin: '5px'
    }
    return (
        <div className="footer text-center">
            <footer 
                style={{margin: '20px', borderBottom: '2px solid #ccc'}}>
                Copyright &copy; 2016 | MIT License 
                <br/>
                <a href="http://github.com/TheFixers/node-honeypot-client" target="blank">
                    <img 
                      src="http://static.wixstatic.com/media/94f355_8ef96f732b7146c1828dc5e474bf770f.gif"
                      style={ stylesGitHub }>
                    </img>
                </a>
            </footer>
        </div>
    )
}
