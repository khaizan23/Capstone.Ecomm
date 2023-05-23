const {v4 : uuidv4} = require('uuid')
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)
const Order = require('../models/orderModel')
router.post("/placeorder", async(req, res) => {

    const {token , cartItems , currentUser , subtotal} = req.body

    const customer = await stripe.customers.create({
        email : token.email , 
        source : token.id
    })

    const payment = await stripe.charges.create({
          amount : subtotal*10 , 
          currency : 'USD' , 
          customer : customer.id , 
          receipt_email : token.email
    } , {
        idempotencyKey: uuidv4()
    })


    if(payment)
    {
        const order = new Order({

              userid : currentUser._id ,
              name : currentUser.name,
              email : currentUser.email ,
              orderItems : cartItems ,
              shippingAddress : {
                  address : token.card.address_line1 ,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  postalCode : token.card.addres_zip
              },
              orderAmount : subtotal,
              transactionId : payment.source.id ,
              isDelivered : false


        })

        order.save()
  .then(() => {
    res.send('Order Placed Successfully');
  })
  .catch(err => {
    res.status(400).json({ message: 'Something went wrong' });
  });

    }
    else{
        return res.status(400).json({ message: 'Payment failed' });
    }
  
});


router.post("/getordersbyuserid", (req, res) => {

    const userid = req.body.userid

    Order.find({ userid: userid })
  .then(docs => {
    res.send(docs);
  })
  .catch(error => {
    return res.status(400).json({ message: 'Something went wrong' });
  });
  
});


router.post("/getorderbyid", (req, res) => {

    const orderid = req.body.orderid

    Order.find({_id: orderid})
    .then(docs => {
      if (docs.length > 0) {
        res.send(docs[0]);
      } else {
        return res.status(404).json({ message: 'Order not found' });
      }
    })
    .catch(error => {
      res.status(400).json({ message: 'Something went wrong' });
    });
  
});


router.get("/getallorders", (req, res) => {

    Order.find({})
  .then(docs => {
    res.send(docs);
  })
  .catch(error => {
    return res.status(400).json({ message: 'Something went wrong' });
  });
  
});


module.exports=router