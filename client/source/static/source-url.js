/**
 * Exports the url for getting client data from server
 */
const HTTP = 'http://'
// Base directory
const HOST = '54.200.61.193/'
// Client data file
const FILE = 'clientInfoData.json'
// Export the whole URL
export default String(HTTP + HOST + FILE)