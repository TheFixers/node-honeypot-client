/**
 * Filename: 'app-list-button.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App pagination component (WIP) Not implemented yet...
 */
import React from 'react'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import AppActions from '../../actions/app-actions'

const _jumpToPage = ( event ) => {
    AppActions.jumpToPage( event.target.dataset.index )
}

const _jumpToDesignated = ( event ) => {
  let value = event.target.value
    if ( value >= 0 && value <= event.target.dataset.max - 1 ) {
         AppActions.jumpToPage( Number( event.target.value ) )
    }
}

const AppPagination = ( props ) => {
    
    let numResults = props.numResults
    let page = props.page
    let pageSize = props.pageSize
    let numPages = Math.ceil( numResults / pageSize )
    let offset = props.offset

    let pages = []
    
    for ( var i = 0; i < numPages; i++ ) {
        pages.push( Object.assign({
            index: i, 
            display: i + 1
        }))
    }

    return (
        <div 
            className="btn-toolbar" 
            role="toolbar" 
            aria-label="Toolbar with button groups">
            <div 
              className="btn-group" 
              role="group" 
              aria-label="First group">

              <button 
                  type="button" 
                  className="btn btn-secondary" 
                  value="0" 
                  data-max={ numPages }
                  onClick={ _jumpToDesignated }>
              First 
              </button>

          </div>
          <div 
              className="btn-group" 
              role="group" 
              aria-label="Previos group">
              
              <button 
                  type="button" 
                  className="btn btn-secondary" 
                  value={ page - 1 }
                  data-max={ numPages } 
                  onClick={ _jumpToDesignated }>
              Prev
              </button>

          </div>
          <div 
              className="btn-group" 
              role="group" 
              aria-label="Pages group" 
              onClick={ _jumpToPage }>
              
              {pages.map((item, index) =>{
                  let i = item.index
                  return (
                      <button 
                           key={ i }
                           value={ i }
                           data-index={ index }
                           type="button"
                           className="btn btn-secondary">
                      { item.display }
                      </button>
                  )
              })}

          </div>
          <div 
              className="btn-group" 
              role="group" 
              aria-label="Next group">
             
             <button 
                  type="button" 
                  className="btn btn-secondary" 
                  value={ page + 1 }
                  data-max={ numPages } 
                  onClick={ _jumpToDesignated }>
              Next
              </button>

          </div>
          <div 
              className="btn-group" 
              role="group" 
              aria-label="Last group" 
              value='last'>
              <button 
                  type="button" 
                  className="btn btn-secondary" 
                  value={ numPages - 1 }
                  data-max={ numPages } 
                  onClick={ _jumpToDesignated }>
              Last
              </button>

          </div>
        </div>
    )
}

export default AppPagination


