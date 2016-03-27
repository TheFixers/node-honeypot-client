import React from 'react'
import Result from './app-result-component'

export default (props) => {
	let txt = "Result detail testing..."
    return (
        <div className="result-detail">
          App result detail...
          <Result txt={txt} />
        </div>
    )
}
