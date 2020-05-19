const {Pool} = require('pg')
const {promisify} = require('util')
const {database} = require('./keys');

const pool = new Pool(database)

pool.on('error', (err, client) => {
    console.error('Error inexperado en la base de datos', err)
    process.exit(-1)
})

pool.on('connect', () => {
    console.log('DB Conectada')
})

promisify(pool.query)

module.exports = pool