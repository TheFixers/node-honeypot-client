import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app-component.js'
import {PROTOCOL, HOST, FILE, URL} from './static/source-url.js'

ReactDOM.render(

    <App 
        className='app-root-component'
        protocol={PROTOCOL}
        host={HOST}
        file={FILE}
        source={URL} />, 

    document.getElementById('root')

)