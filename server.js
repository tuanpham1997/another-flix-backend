// Imports
const express = require('express')
const app = express()
require('dotenv').config()

// Port
const PORT = 4020

app.listen(PORT, () => console.log(`app running on port ${PORT}`))