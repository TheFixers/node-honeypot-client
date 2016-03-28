import React from 'react';
import Result from './app-result-component'

export default ( props ) => {
	let txt = "Item"
	let numResults = 9
    let styles = {
        marginTop: '20px',
        marginBottom: '20px'
    }
    let text = "Pages \<1, 2, 3, 4, 5, 6, 7\>"
    return (
        <div className="results">
        	<h4 
              className='text-success text-center' 
              style={styles}
            >Showing 0-{numResults} of 72 results</h4>
            <Result txt={txt + ' 0'}/>
            <Result txt={txt + ' 1'}/>
            <Result txt={txt + ' 2'}/>
            <Result txt={txt + ' 3'}/>
            <Result txt={txt + ' 4'}/>
            <Result txt={txt + ' 5'}/>
            <Result txt={txt + ' 6'}/>
            <Result txt={txt + ' 7'}/>
            <Result txt={txt + ' 8'}/>
            <Result txt={txt + ' 9'}/>
            <br /><br />
            <h5 className="text-center">{text}</h5>
        </div>
    )
}
