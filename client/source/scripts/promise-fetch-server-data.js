import jQuery from 'jquery'

// Returns a promise which promises that after
// execution of JSON/AJAC call, it will either
// reolve the response, or reject with an error
// Requirements: 'jquery'
export default (url) => {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: 'GET', // Get request
            url: url, // Pass in the url
            dataType: 'text', // server responds w/ invalid json
            async: true, // Async return
            crossDomain: true, // Cross domain
            success(data) {
                resolve(data)
            },
            error(xhr, options, err) {
                reject(err)
            }
        })
    })
}