var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session')

var connection = require('../db');


console.log('MySQL Connection details  '+ connection);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Encouraging energy efficiency' });
//;
var username ="";
  var password;
  var tMain;
  var tLiving;
  var tKitchen;
  var tBedroom1;
  var tBedroom2;
  var outsideTemperature;




router.get('/main',function(req, res,next) {
  if(username!=""){
    res.render('index', { title: 'Encouraging energy efficiency',user:  username, t_Main: tMain, t_Living: tLiving,
      t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2 });
  }else{
    res.render('login');
  }
  
});

/* GET login listing. */
router.get('/', function(req, res, next) {
  if(username!=""){
    res.render('index', { title: 'Encouraging energy efficiency',user:  username, t_Main: tMain, t_Living: tLiving,
      t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2  });
  }else{
    res.render('login');
  }
});

/* GET login listing. */
router.get('/slideshow', function(req, res, next) {
  res.render('slideshow');
});

router.post('/',function(req,res){
	username = req.body.username;
	password = req.body.password;
	tMain = 0;
	tLiving = 0;
	tKitchen = 0;
	tBedroom1 = 0;
	tBedroom2 = 0;
	outsideTemperature = 0;
	// request('http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=1f7afc9b07c5fcc7a1fa0a89aa72d9e0', function (error, response, body) {
	//   console.log('error:', error); // Print the error if one occurred
	//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	//   console.log('body:', body); // Print the HTML for the Google homepage.
	// });

if(req.body.username!="" && req.body.password!=""){
	connection.query('SELECT * FROM users WHERE name = ?',[username], function (error, results, fields) {
    if(results.length >0){
      if(results[0].pass== password){
      	connection.query('SELECT * FROM userInfo WHERE name = ?',[username], function (error, results, fields) {
         
            tMain = results[0].tMain;
            tLiving = results[0].tLiving;
            tKitchen = results[0].tKitchen;
            tBedroom1 = results[0].tBedroom1;
            tBedroom2 = results[0].tBedroom2;
            res.render('index',{ title: 'Encouraging energy efficiency' , user: req.body.username, t_Main: tMain, t_Living: tLiving,
            t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2 }); 
            
      	});

      }
    }
    else{
      res.render('login');
    } 
  });
}

if(req.body.slideshow=="button"){
			res.render('slideshow');
}
if(req.body.logout=="leave"){
    username = "";
    res.render('login');
}
if(req.body.register=="reg"){
  res.render('register');
}
if(req.body.newUsername !="" && req.body.newPassword!=""){
  connection.query('INSERT INTO users (name,pass) VALUES (?,?)',[req.body.newUsername ,req.body.newPassword], function (err) {
                if (err) throw err;
            });
  res.redirect('main');
}

   console.log(req.body);
   //you will get your data in this as object.
});


module.exports = router;
