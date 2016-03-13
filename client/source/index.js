import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app-component.js'
import source from './static/source-url.js'
// Use ReactDOM to render App component
ReactDOM.render(<App source='http://54.200.61.193/clientInfoData.json' />, document.getElementById('root'));