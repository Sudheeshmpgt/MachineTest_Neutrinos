const CartModel = require('../model/cartSchema')
const ObjectId = require('mongoose').Types.ObjectId

const addToCart = async (req, res) => {
    try{
        const {productId, userId} =  req.body
        const cart = await CartModel.find({userId:userId, productId: productId})
        
        if(cart.length !=0 ){
            const id= cart[0]._id
            const data = await CartModel.findOne({_id:ObjectId(id)})
            const addItem = await CartModel.updateOne({_id:ObjectId(id)}, {$inc:{quantity: 1}})
            res.send({message:'Product added', item: addItem})
        }else{
            const item = new CartModel({
                userId: userId,
                productId: productId,
                quantity: 1
            })
            const newItem = await item.save()
            
            res.send({message:'Product added', item: newItem}) 
        }
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}

const getCartDetails = async (req, res) => {
    try{
        const userId = req.params.id
        const items = await CartModel.find({userId: userId})
        const productDetails = await CartModel.populate(items, {
            path:"productId"
        })
        const total = productDetails.map((data)=>(data.quantity * data.productId.product_price))
        const totalAmount = total.reduce((acc, cur)=>{
           return acc + cur
        },0) 
        if(items){
            res.send({message:'ok', item:productDetails, total: totalAmount})
        }else{
            res.send({error:'No products found'})
        }
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {addToCart, getCartDetails}