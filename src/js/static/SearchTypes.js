/**
 * Filename: 'SearchTypes.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Search types
 */
export default {
    ALL:        { index: 0,  display: 'Show all',        field: 'ALL'},
    INDEX:      { index: 1,  display: 'Index',           field: 'Index' },
    ID:         { index: 2,  display: 'User ID',         field: '$oid' },
    IP:         { index: 3,  display: 'IP Adress',       field: 'IP' },
    TYPE:       { index: 4,  display: 'Connection Type', field: 'TYPE' },
    PORT:       { index: 5,  display: 'Port',            field: 'Port' },
    SOCKET:     { index: 6,  display: 'Socket',          field: 'Socket' },
    USERNAME:   { index: 7,  display: 'Username',        field: 'Username' },
    PASSWORDS:  { index: 8,  display: 'Passwords',       field: 'Passwords' },
    CLIENT_URL: { index: 9,  display: 'Client URL',      field: 'clientURL' },
    KEY:        { index: 10, display: 'Key',             field: 'Key' },
    TIME:       { index: 11, display: 'Time',            field: 'Time' }
}
