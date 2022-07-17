const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

require('./server/database/database')();

app.use('/api/user', require('./server/router/userRoute')) 
app.use('/api/product', require('./server/router/productRoute'))
app.use('/api/cart', require('./server/router/cartRoute'))
app.use('/api/order', require('./server/router/orderRoute'))
app.use('/api/admin', require('./server/router/adminRoute'))

app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:9000") 
}) 