/**
 * Filename: 'app-list-button.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App pagination component (WIP) Not implemented yet...
 */
import React from 'react'
import StoreWatchMixin from '../../mixins/StoreWatchMixin'
import AppActions from '../../actions/app-actions'

const _test = ( event ) => {
  console.log ("Jump to page:", event.target.index )
}

const getPaginationData = () => {
    return Object.assign( { data: null } )
}

const _jumpToPage = ( event ) => {
    AppActions.jumpToPage( event.target.dataset.index )
}

const AppPagination = ( props ) => {
    
    let numResults = props.numResults
    let page = props.page
    let pageSize = props.pageSize

    let numPages = Math.ceil( numResults / pageSize ) || 10

    let offset = props.offset

    console.log( "numResults:", numResults )
    console.log( "page", page )
    console.log( "pageSize:", pageSize )
    console.log( "numPages:", numPages )
    console.log( "offset", offset )
    
  
    let pages = []
    for ( var i = 0; i < numPages; i++ ) {
        pages.push( Object.assign({
            index: i, 
            display: i + 1
        }))
    }

    for ( var item in pages ) {
        //console.log(pages[item])
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
                  value='first' 
                  //onClick={ AppActions.jumpToFirst() }
                  >
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
                  value='prev' 
                  //onClick={ AppActions.jumpToPrevious() }
                  >
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
                  value='next' 
                  onClick={ _test }>
              Next
              </button>

          </div>
          <div 
              className="btn-group" 
              role="group" 
              aria-label="Last group" 
              value='last' 
              onClick={ _test }>
              
              <button 
                  type="button" 
                  className="btn btn-secondary" 
                  value='last' 
                  onClick={ _test }>
              Last
              </button>

          </div>
        </div>
    )
}

export default StoreWatchMixin( AppPagination, getPaginationData )


