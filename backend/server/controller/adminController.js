const AdminModel = require('../model/adminschema'); 

adminLogin = async (req, res) => {
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

module.exports = {adminLogin}