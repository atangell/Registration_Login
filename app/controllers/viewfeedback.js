module.exports.home = (req, res) => {
  userData.findOne(
    { email: req.body.userName, password: req.body.password },
    (err, item) => {
      if (err) {
        return console.error(err);
      } else {
        console.log(item);
        res.render("./viewfeedback", {
          title: "Customer Feedbacks",
          feedback: item.feedback,
          name: item.firstName + item.lastName,
          email: item.email
        });
      }
    }
  );
};
