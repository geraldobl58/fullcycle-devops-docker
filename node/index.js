const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'teste',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('John Doe')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('Hello Node Docker')
})

app.listen(port, () => {
  console.log(`Starting ${port}. 🚀🚀🚀🚀`)
})