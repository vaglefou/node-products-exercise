const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(
    () => {console.log(`Connection to MongoDB established`) , err => console.log(`Failed to connect to MongoDB`)}
)


app.get('./users')

const user = require('./routes/user.routes')
app.use('/api/user', user)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

