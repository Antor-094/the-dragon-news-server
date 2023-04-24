const express = require('express')
const cors = require('cors')
const port = 5000;
const categories = require('./data/categories.json')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon news data coming soon!!')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon server is running on port ${port}`)
})