const express = require('express')
const app = express()
// const port = 3000

const port = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World2!'))
app.get('/user', (req, res) => res.send('Hello user!'))
app.get('/teste', (req, res) => res.send('Hello teste!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))