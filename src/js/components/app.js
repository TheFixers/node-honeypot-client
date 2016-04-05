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
import SearchHeader from './header/app-header-search'
import DefaultHeader from './header/app-header-default'

export default ( props ) => {
    return (
        <Router>
            <Route path="/" component={ Template} >
                <IndexRoute components={{ main: Results, widget: SearchHeader }}/>
                <Route path="list" components={{ main: AppList, widget: DefaultHeader }} />
                <Route path="item/:item" components={{ main: ResultsItemDetail, widget: DefaultHeader }} />
            </Route>
        </Router>
    )
}
