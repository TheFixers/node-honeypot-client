/**
 * Filename: 'StoreWatchMixin.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * A higher-order component to help reduce code for
 * events, callbacks, and change listeners. A component
 * gets wrapped with this to inherit constructor and
 * lifecylce functions as well as other custom functions.
 */

import React from 'react'
import AppStore from '../stores/app-store'

export default ( InnerComponent, stateCB ) => class extends React.Component {
    
    constructor( props ) {
        super( props )
        this.state = stateCB( props )
        this._onChange = this._onChange.bind( this )
    }

    componentWillMount() {
        AppStore.addChangeListener( this._onChange )
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange )
    }

    _onChange() {
        this.setState( stateCB( this.props ) )
    }

    render() {
        return <InnerComponent {...this.state} {...this.props} />
    }
}

