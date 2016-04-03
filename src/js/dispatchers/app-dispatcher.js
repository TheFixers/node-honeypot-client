/**
 * Filename: 'app-dispatcher.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Flux dispatcher. Reponsible for dispatching and registering events
 */

import { Dispatcher } from 'flux'

const LOGGING = true

const flux = new Dispatcher()

export function register( callback ) {
    return flux.register( callback )
}

export function dispatch( actionType, action ) {
	if ( LOGGING ) console.log( actionType )
    flux.dispatch( actionType, action )
}
