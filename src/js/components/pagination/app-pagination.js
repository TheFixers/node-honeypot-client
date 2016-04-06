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
    return Object.assign( { currentPage: null } )
}

const _jumpToPage = ( event ) => {
    AppActions.jumpToPage( event.target.dataset.index )
}

const AppPagination = ( props ) => {
    
    let numPages = 5
    
    let resultsPerPage = 10

    let currentPage = 1

    let page = 1

    

    //numPages = Math.ciel( props.numResults / props.resultsPerPage )
    


    let pages = []
    for ( var i = 1; i < numPages + 1; i++ ) {
        pages.push( Object.assign({
            index: i, 
            resultsPerPage: resultsPerPage, 
            page: page
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
                      { i }
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


