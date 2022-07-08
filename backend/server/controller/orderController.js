const OrderModel = require('../model/orderSchema')
const CartModel = require('../model/cartSchema')

const addOrder = async(req, res) => {
    try{
        const {userId} = req.body
        const items = await CartModel.find({userId: userId})
        const productDetails = await CartModel.populate(items, {
            path:"productId"
        })
        const total = productDetails.map((data)=>(data. product_price * data.quantity))
        if(items){
            const orderItem = new OrderModel({
                userId: userId,
                products : items,
                total_price : total
            })
            const newOrder = await orderItem.save()
            res.send({message:'Ok', order: newOrder})
            const deleteCart = await CartModel.deleteMany({})
        }else{
            res.send({error:'No orders found'})
        }
    }catch(error){
        res.satus(500).send(error)
    }
}

const myOrder = async(req, res) => {
    try{
        const id = req.params.id
        const order = await OrderModel.find({userId : id})
        res.send({message:'Ok', order : order})
    }catch(error){
        res.satus(200).send(error)
    }
}

module.exports = {addOrder, myOrder}