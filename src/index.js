const getCharById = require('./controllers/getCharById')
const data = require('./utils/data')
const express = require('express')

const server = express()
const port = 3001


/* http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes('/rickandmorty/character')) {
        const id = Number(req.url.split('/').pop())

        getCharById(res, id)
    }
}) */
    



server.listen(port, () => console.log(`Rick and Morty Server - Raised on port ${port}`))