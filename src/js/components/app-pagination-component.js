
import React from 'react'

export default () => {
    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="Previos group">
            <button type="button" className="btn btn-secondary">Prev</button>
          </div>
          <div className="btn-group" role="group" aria-label="Pages group">
            <button type="button" className="btn btn-secondary">1</button>
            <button type="button" className="btn btn-secondary">2</button>
            <button type="button" className="btn btn-secondary">3</button>
            <button type="button" className="btn btn-secondary">4</button>
            <button type="button" className="btn btn-secondary">5</button>
            <button type="button" className="btn btn-secondary">6</button>
            <button type="button" className="btn btn-secondary">7</button>
          </div>
          <div className="btn-group" role="group" aria-label="Next group">
            <button type="button" className="btn btn-secondary">Next</button>
          </div>
        </div>
    )
}


