const CartModel = require('../model/cartSchema')

const addToCart = async (req, res) => {
    try{
        const {productId, userId} =  req.body
        const cart = await CartModel.find({userId:userId, productId: productId})
        if(cart){
            const addItem = await CartModel.findByIdAndUpdate({_id: cart._id},{quantity:{$inc: 1}})
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
        res.status(500).send(error)
    }
}

const getCartDetails = async (req, res) => {
    try{
        const userId = req.params.id
        const items = await CartModel.find({userId: userId})
        if(items){
            res.send({message:'ok', item:items})
        }else{
            res.send({error:'No products found'})
        }
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {addToCart, getCartDetails}