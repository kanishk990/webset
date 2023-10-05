const express = require('express')
const app = express()
const apiroute = require('./router/api')
const cors = require('cors')
const PORT = 3000
const axios = require('axios')

app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/', async (req, res) => {
    console.log(req.body)
    let url = req.body.link
    let videoId = null
    const patterns = [
        /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
        /(?:https:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
        /(?:https:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    ]
    patterns.forEach(pattern => {
        const match = url.match(pattern);
        if (match && match[1]) {
            videoId = match[1];
        }
    })

    // const apiKey = 'AIzaSyB9_kd0EzRjxSY9AIY08vURrMrA0NlYTSE'
    // let data = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`)
    // console.log(data.data.items)
    res.send(videoId)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
