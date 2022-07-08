const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./server/database/database')();

app.use('api/user', require('./server/router/userRoute'))
app.use('api/product', require('./server/router/productRoute'))
app.use('api/cart', require('./server/router/cartRoute'))
app.use('api/order', require('./server/router/orderRoute'))

app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:9000")
})