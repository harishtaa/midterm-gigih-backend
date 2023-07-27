import express  from "express";
import Product from "../modules/products.js"
const route = express.Router();

route.get('/:videoId', async (req, res) =>{
    const videoId = req.params.videoId
    try{
        const results  = await Product.find({videoId:videoId})
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.post('/', async (req, res) =>{
    const {videoId, productId, productUrl,title,price} = req.body
    try{
        const p = await new Product({
            videoId,
            productId,
            productUrl,
            title,
            price
        }).save()
        res.status(201).json(p)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})

export default route