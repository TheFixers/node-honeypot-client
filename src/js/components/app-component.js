import React from 'react'
import Results from './app-results-area-component'
import ResultDetail from './app-result-detail-component'
import Template from './app-template-component'
import {Router, Route, IndexRoute} from 'react-router'

export default () => {
    return (
        <Router>
            <Route path="/" component={Template}>
                <IndexRoute component={Results}/>
                <Route path="result/:result" component={ResultDetail} />
            </Route>
        </Router>
    )
}
