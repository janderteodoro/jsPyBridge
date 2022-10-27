const express = require('express')
const app = express()

app.get('/', (request, response) => {
    return response.json({
        message: 'using python to execute node.js'
    })
})

app.listen(3000, () => {
    console.log('server running in http://localhost:3000')
})