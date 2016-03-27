import React from 'react';
import Result from './app-result-component'

export default ( props ) => {
	let txt = "Item"
	let numResults = 4
    return (
        <div className="results">
        	<h4 className='text-success text-center'>SHOWING {numResults} RESULTS</h4>
            <Result txt={txt + ' 1'}/>
            <Result txt={txt + ' 2'}/>
            <Result txt={txt + ' 3'}/>
            <Result txt={txt + ' 4'}/>
        </div>
    )
}
