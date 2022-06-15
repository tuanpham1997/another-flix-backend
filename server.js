// Imports
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// ===== ROUTES =====
// Movies
app.use('/api/v1/movies', require('./routes/api/movies'))
// Users
app.use('/api/v1/users', require('./routes/api/users'))

// ===== PORT =====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))