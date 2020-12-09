const express = require('express')
var knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
  });

const app = express()

app.get('/', (req, res) => {
    console.log(req.connection.remoteAddress);
    knex.select('*').from('vistors_tbl').then(console.log)
})

app.listen(3001, () => {
    console.log('listening on port 3001')
})