var express = require('express');
var mongoose = require("mongoose");
var User = require('mongoose').model('User');
var router = new express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config');

router.get('/editprofile', (req, res) => {
var token = req.headers.authorization.split(' ')[1];
var decoded = jwt.decode(token, {complete: true});
console.log(decoded);
console.log(decoded.payload.sub)
var id = decoded.payload.sub
User.find(function (err,ok){
    console.log('\x1b[33m%s\x1b[0m','/api/editporfile'+ 'KKKKKKKKKKKKKKKKKKKKKKKKKK')
res.status(200).json({
    
    message: {email:""+ok.local.email,
    name: ""+ ok.local.name}
  });
})
});
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/react_app');
var db = mongoose.connection;
router.get('/books', function(req, res){
  db.collection('books').find(function(err, books){
    if(err){
      console.log('# API GET BOOKS: ', err);
    }
      console.log(books)
    res.json(books)
  })
});



module.exports = router;