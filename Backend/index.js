const express = require('express');
const app = express();
const port = 5000;

const UserRouter = require('./routers/user')

// middleware
app.use(express.json())

app.use('/user', UserRouter)

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})
