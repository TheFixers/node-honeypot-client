/**
 * Filename: 'app.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App router
 */

import React from 'react'
import Results from './results/app-results'
import ResultsItemDetail from './detail/app-results-item-detail'
import Template from './app-template'
import { Router, Route, IndexRoute } from 'react-router'

export default ( props ) => {
    return (
        <Router>
            <Route path="/" component={ Template }>
                <IndexRoute component={ Results }/>
                <Route path="item/:item" component={ ResultsItemDetail } />
            </Route>
        </Router>
    )
}
