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
import AppListButton from './list/app-list-button'
import AppList from './list/app-list'

export default ( props ) => {
    return (
        <Router>
            <Route path="/" component={ Template }>
                <IndexRoute component={ Results }/>
                <Route path="list" component={ AppList } />
                <Route path="item/:item" component={ ResultsItemDetail } />
            </Route>
        </Router>
    )
}
