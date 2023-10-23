const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const AuthRouter = require('./routes/auth')
const ProblemsRouter = require('./routes/auth')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', AuthRouter)
app.use('/api/problems', ProblemsRouter)

mongoose.connect('mongodb://localhost:27017/oncode', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected')
}).catch((error) => {
  console.log(error.message)
})

const PORT = process.env.port || 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
