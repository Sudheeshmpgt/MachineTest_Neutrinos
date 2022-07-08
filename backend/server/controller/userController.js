const UserModel = require('../model/userSchema')

const userLogin = async (req, res) =>  {
    try{
        const {name} = req.body
       data = name ? name :  Math.random().toString(36).slice(2)
        const user = new UserModel({
            name : data
        })
        const newUser = await user.save();
        res.send({message:'OK', user: newUser})
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {userLogin} 