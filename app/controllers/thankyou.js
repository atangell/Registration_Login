let userData = require("../models/db");

module.exports.home = (req, res) => {
  var item = {
    feedback: req.body.message
  };
  userData.findOneAndUpdate(
    { email: req.body.email },
    { feedback: req.body.message },
    (err, item) => {
      if (err) {
        return console.error(err);
      } else {
        console.log("Data Saved");
        console.log(item);
        res.render("./thankyou", {
          title: "Thankyou",
          firstName: req.body.name,
          feedback: req.body.message
        });
      }
    }
  );
};


