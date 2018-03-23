// require
let express = require("express");
// userName: String;
// emailAddr: String;

let userData = require("../models/db");
module.exports.home = (req, res) => {
  var item = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    language: req.body.language,
    gender: req.body.gender,
    country: req.body.country
  };
  userData.create(item, (err, item) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Data Saved");
      console.log(item);
      res.render("./index", {
        title: "Login Page"
      });
    }
  });
};
