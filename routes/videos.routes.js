import express  from "express";
import Video from "../modules/videos.js"
const route = express.Router();

route.get('/', async (req, res) =>{
    try{
        const results  = await Video.find()
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.post('/', async (req, res) =>{
    const {videoId, thumbnailUrl, videoUrl} = req.body
    try{
        const results  = await Video.find()
        const v = await new Video({
            videoId: results.length+1,
            thumbnailUrl,
            videoUrl
        }).save()
        res.status(201).json(v)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})

export default route