import React from 'react'

export default ( props ) => {
    let numPages = 8
    let resultsPerPage = 10
    let page = 1
    if ( props.resultsPerPage && props.numResults ) {
        numPages = Math.ciel( props.numResults / props.resultsPerPage )
    }

    let pages = []
    for ( var i = 0; i < numPages; i++ ) {
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
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="Previos group">
            <button type="button" className="btn btn-secondary">Prev</button>
          </div>
          <div className="btn-group" role="group" aria-label="Pages group">
                {pages.map((item) =>{
                    let i = item.index
                    return (
                        <button 
                             key={ i }
                             value={ i }
                             type="button"
                             className="btn btn-secondary">
                        { i }
                        </button>
                    )
                })}
          </div>
          <div className="btn-group" role="group" aria-label="Next group">
            <button type="button" className="btn btn-secondary">Next</button>
          </div>
        </div>
    )
}


