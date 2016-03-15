import jQuery from 'jquery'

export default (url) => {
  return new Promise((resolve, reject) => {
    jQuery.ajax({
      type: 'GET',
      url: url,
      dataType: 'text', // server responds w/ invalid json
      async: true,
      crossDomain: true,
      success(data) {
        resolve(data)
      },
      error(xhr, options, err) {
        reject(err)
      }
    })
  })
}