import Product from '../models/productModel.js'

export const getProducts= async(request, responce)=>{
    try{
        const products = await Product.find()
        responce.json(products)
    }
    catch{
        responce.status(400).json({ message: 'Error fetching products'})
    }
}