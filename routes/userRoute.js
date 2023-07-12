
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require('../models/userModel')

router.post("/register", (req, res) => {

    
    User.find({ email: req.body.email })
  .then(docs => {
    if (docs.length > 0) {
      return res.status(400).json({ message: 'Something went wrong' });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      newUser.save()
        .then(() => {
          res.send('User Registration success');
        })
        .catch(error => {
          res.status(400).json({ message: 'Something went wrong' });
        });
    }
  })
  .catch(error => {
    res.status(400).json({ message: 'Something went wrong' });
  });



    
  
});


router.post("https://capstoneproj-vuqy.onrender.com/login", (req, res) => {

    User.find({ email: req.body.email, password: req.body.password })
  .then(docs => {
    if (docs.length > 0) {
      const user = {
        name: docs[0].name,
        _id: docs[0]._id,
        email: docs[0].email,
        isAdmin: docs[0].isAdmin
      };

      res.send(user);
    } else {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
  })
  .catch(error => {
    res.status(400).json({ message: 'Something went wrong' });
  });
  
});


router.post("/update", (req, res) => {

    const {userid , updateduser} = req.body

    User.findByIdAndUpdate(userid, {
        name: updateduser.name,
        email: updateduser.email,
        password: updateduser.password
      })
        .then(() => {
          res.send('User details updated successfully');
        })
        .catch(error => {
          console.log(userid);
          return res.status(400).json({ message: 'Something went wrong: ' + error });
        });
  
});


router.get("/getallusers", (req, res) => {
  
    User.find({})
  .then(docs => {
    res.send(docs);
  })
  .catch(error => {
    return res.status(400).json({ message: 'Something went wrong' });
  });

});


router.post("/deleteuser", (req, res) => {

    User.findByIdAndRemove(req.body.userid)
  .then(() => {
    res.send('User deleted successfully');
  })
  .catch(error => {
    return res.status(400).json({ message: 'Something went wrong: ' + error });
  });
  
});





module.exports = router
