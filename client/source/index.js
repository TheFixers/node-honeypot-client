import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app-component.js'
import {PROTOCOL, HOST, FILE, URL} from './static/source-url.js'

ReactDOM.render(

	<App 
		protocol={PROTOCOL}
		host={HOST}
		file={FILE}
		source={URL} />, 

	document.getElementById('root')

)