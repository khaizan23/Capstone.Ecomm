const express = require("express");
const bodyParser = require("body-parser");
const app = express()
var dbconnection = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
app.use(bodyParser.json());
const path = require('path');
app.use('/api/products/' , productsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));


    if(process.env.NODE_ENV === 'production')
    {
        app.use('/' , express.static('client/build'))

        app.get('*' , (req,res)=>{

            res.sendFile(path.resolve(__dirname , 'client/build/index.html'))

        })


    }

   

const port = process.env.PORT || 8000;
// "proxy": "http://localhost:8000/"
// "proxy": "https://capstoneproj-vuqy.onrender.com/"

app.listen(port, () => console.log(`Node JS Server Started`));