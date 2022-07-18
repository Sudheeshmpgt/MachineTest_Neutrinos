const AdminModel = require('../model/adminSchema'); 

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email != '' || password != '') {
            const admin = await AdminModel.findOne({ email: email })
            if (admin && (password == admin.password)) {
                res.send({ message: "Login Successfull", data: admin })
            }
            else {
                res.send({ message: "Inavalid Admin details" });
            }
        } else {
            res.send({ message: "Please Enter Email and Password" });
        }
    } catch (error) { 
        res.send({ message: "Bad Request", err: error });
    }
}

const adminRegister = async (req, res) =>{
    try {
        console.log(req.body)
        const { email, password } = req.body;
        const admin = await AdminModel.findOne({ email: email });
        if (admin) {
            res.send({ message: "Admin already exists" });
        } else {
            const registerAdmin = new AdminModel({
                email: req.body.email,
                password: req.body.password 
            });
            const admin = await registerAdmin.save();
            res.send({ message: "Admin Registered Successfully", admin: admin }); 
        }
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}  

module.exports = {adminLogin, adminRegister}