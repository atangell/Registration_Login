let express = require('express');
let userData = require('../models/db');

module.exports.home = (req, res) => {
    // res.render('./feedback', {
    //   title: 'Feedback Form',
    //   un: req.body.username


      userData.findOne({email : req.body.userName,password : req.body.password}, (err, item) => {
        if(err) {
          console.log("wrong credentials");
          return console.error(err);
          
        }
        else if (req.body.userName == 'amar@gmail.com' && req.body.password == 'amar'){
          userData.find( (err, item) =>{
            if(err) {
              return console.error(err);
            }else{
              console.log(item);
              res.render('./viewfeedback', {
                title: 'Customer Feedbacks',
                customerViews: item
              });
          }
          
    
        });
      }
      else{
        console.log('inside normal registration login');
        console.log(item);
          res.render('./feedback', {
            title: 'Customer Feedbacks',
            email : item.email,
            firstName : item.firstName,
            lastName : item.lastName,
            gender : item.gender,
            country : item.country,
            language : item.language
    
    
          });
        }
      });
    };
