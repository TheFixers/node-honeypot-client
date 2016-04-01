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
