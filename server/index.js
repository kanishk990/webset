const express = require('express')
const app = express()

const PORT = 3000


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    // Other CORS headers can be set here as needed
    next();
})

app.get('/', (req,res)=> { 
    res.send("hello from server")
})

app.listen(PORT , ()=> { 
    console.log(`listening on port ${PORT}`)
})
