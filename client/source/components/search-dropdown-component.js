import React from 'react'
import DropdownOption from './search-dropdown-option-component.js'
import SEARCHTYPES from '../scripts/search-types.js'

export default React.createClass({

    displayName: 'Search Dropdown Component',

    propTypes: {
        searchType: React.PropTypes.string.isRequired,
        updateSearchType: React.PropTypes.func.isRequired
    },

    componentDidMount() {
        console.log("Search Dropdown mounted...")
    },

    componentWillUnmount() {
        console.log("Search Dropdown un-mounted...")
    },

    _mapObject(object, callback) {
        return Object.keys(object).map((key, index) => {
            return callback(key, object[key], index)
        })
    },

    render() {
        return (
            <div className='react-search-dropdown-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        return (
            <select 
                className="search-select" 
                defaultValue="title"
                searchType={this.props.searchType}
                onChange={this.props.updateSearchType}>
                
                <option 
                    className='select-header' 
                    value="title" 
                    disabled>
                Filter By
                </option>

                {this._mapObject(SEARCHTYPES, (key, value, index) => {
                    return ( 
                        <DropdownOption
                            key={index}
                            value={value.name}
                            text={value.text} />
                    ) 
                })}
            </select>
        )
    }
})