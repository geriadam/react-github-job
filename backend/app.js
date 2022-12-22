const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectToDatabase = require('./database/config')
const user = require('./routes/user')
const job = require('./routes/job')
const errorMiddleware = require('./middlewares/error')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(400).send('Api working')
})

app.use('/user', user)
app.use('/jobs', job)

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    errors: [
      {
        msg: 'Route not found',
      },
    ],
  })
})

app.use(errorMiddleware)

const PORT = process.env.PORT || 8000

connectToDatabase().then(_ => {
  app.listen(PORT, _ => {
    console.log(`Server started on port ${PORT}`)
  })
})