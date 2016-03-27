import React from 'react'
import SearchDropdown from './search-dropdown-component.js'
import SearchInput from './search-input-component.js'

export default React.createClass({

    displayName: 'Search Area Component',

    propTypes: {
        placeholder: React.PropTypes.string.isRequired,
        searchTerm: React.PropTypes.string.isRequired,
        searchType: React.PropTypes.string.isRequired,
        updateSearchTerm: React.PropTypes.func.isRequired,
        updateSearchType: React.PropTypes.func.isRequired
    },

    componentDidMount() {
        //console.log("Search Area mounted...")
    },

    componentWillUnmount() {
        //console.log("Search Area un-mounted...")
    },

    render() {
        return (
            <div className='react-search-area-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        if (this.props.searchType === "ALL") {
            return (
                <div> 
                    <SearchDropdown 
                        searchType={this.props.searchType}
                        updateSearchType={this.props.updateSearchType} />
                </div>
            )
        } else {
            return (
                <div> 
                    <SearchDropdown 
                        searchType={this.props.searchType}
                        updateSearchType={this.props.updateSearchType} />
                    <SearchInput 
                        placeholder={this.props.placeholder}
                        searchTerm={this.props.searchTerm}
                        updateSearchTerm={this.props.updateSearchTerm} />
                </div>
            )
        }
    }
})
