let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
// module.exports which points to a series of functions
var app = express();
app.use(bodyParser());

// need a require statement
let indexController = require('../controllers/index');
let feedbackController = require('../controllers/feedback');
let thankyouController = require('../controllers/thankyou');
let signUpController = require('../controllers/signUp');
let viewfeedbackController = require('../controllers/viewfeedback')

router.get('/', (req, res,next) => {
  indexController.home(req, res,next);
  // var userName = req.body.userName;
  // console.log("HI")
  // console.log(`My user name is ${userName}`);
});

router.post('/login', (req, res) => {
  indexController.home(req, res);
  
  // var userName = req.body.userName;
  // console.log("HI")
  // console.log(`My user name is ${userName}`);
  

});

router.post('/feedback', (req, res) => {
  feedbackController.home(req, res);
  
});
//var uName = window.document.getElementById("userName").value;

router.post('/signup', (req, res) => {
  signUpController.home(req, res);
  
});

router.post('/viewfeedback', (req, res) => {
  viewfeedbackController.home(req, res);
  
});


router.post('/thankyou', (req, res) => {
  thankyouController.home(req, res);
  
});

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
