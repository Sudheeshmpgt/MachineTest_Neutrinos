const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports = AdminModel = mongoose.model('Admin',adminSchema); 

// const admins = new AdminModel({email:'admin@gmail.com',password:'admin@123'})
// admins.save().then((m)=>{
//     console.log(m)
// }).catch((e)=>{
//     console.log(e)
// })
