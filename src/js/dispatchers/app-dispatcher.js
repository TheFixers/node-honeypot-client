import {Dispatcher} from 'flux'

const LOGGING = true

const FROM = 'src/js/dispatchers/app-dispatcher'

const flux = new Dispatcher()

export function register(callback) {
    return flux.register(callback)
}

export function dispatch(actionType, action) {
	if (LOGGING) console.log(actionType)
    flux.dispatch(actionType, action)
}
