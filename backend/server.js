import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('MongoDB Connected')
    })
    .catch(error=>console.log(error))


app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${PORT}`))