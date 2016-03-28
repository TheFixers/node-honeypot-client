import React from 'react'

export default (props) => {
    let id = 1
    return (
        <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
            <h4>{ props.item.title }</h4>
            <img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
            <p>Summary</p>
            <div className="btn-group">
                {/*<Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>*/}
                <Link to={ `/result/1` } className="btn btn-default btn-sm">Learn More</Link>
                <CartButton txt="Add To Cart" handler={AppActions.addItem.bind(null, props.item )} />
            </div>
        </div>
    )
}


