var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session')

var connection = require('../db');
var dbHelper= require('../db-helper');


console.log('MySQL Connection details  '+ connection);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Encouraging energy efficiency' });
//;
var username ="";
var loggedIn = false;
  var password;
  var tMain;
  var tLiving;
  var tKitchen;
  var tBedroom1;
  var tBedroom2;
  var outsideTemperature;


router.post('/tips', function(req, res){
  var outside=req.body;
  for(var num in outside){
    // console.log(outside[num]);
    // console.log(outside[num].key +" = "+outside[num].value);

    connection.query('UPDATE tips SET value = ? WHERE name = ?',[outside[num].value ,outside[num].key], function (err) {
                if (err) throw err;
            });
    
  }
});


router.get('/main',function(req, res,next) {
  // if(username!=""){
  //   res.render('index', { title: 'Encouraging energy efficiency',user:  username, t_Main: tMain, t_Living: tLiving,
  //     t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2 });
  // }else{
  //   res.render('login');
  // }
  res.render('index');
});

/* GET login listing. */
router.get('/', function(req, res, next) {
  if(username!="" && loggedIn){
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

router.get('/selection', function(req, res, next) {
  res.render('selection');
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

if(username!="" && password!=""){

  if(dbHelper.checkUser(req.body.username,req.body.password, function(result){
    if (result == true){
        loggedIn = true;
        var userData = dbHelper.getUserData(username,function(result){
          if(result!=null){

          tMain = result.tMain;
          tLiving = result.tLiving;
          tKitchen = result.tKitchen;
          tBedroom1 = result.tBedroom1;
          tBedroom2 = result.tBedroom2;
          res.render('index',{ title: 'Encouraging energy efficiency' , user: username, t_Main: tMain, t_Living: tLiving,
          t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2 }); 
          }
        });
    }
  else{
      res.render('login');
    } 
  }));   
} 

if(req.body.slideshow=="button"){
			res.render('slideshow');
}
if(req.body.logout=="leave"){
    username = "";
    loggedIn = false;
    res.render('login');
}
if(req.body.register=="reg"){
  res.render('register');
}

   console.log(req.body);
   //you will get your data in this as object.
});

router.post('/register',function(req,res){

if(req.body.newUsername !="" && req.body.newPassword!=""){
  connection.query('INSERT INTO users (name,pass) VALUES (?,?)',[req.body.newUsername ,req.body.newPassword], function (err) {
                if (err) throw err;
            });
  res.render('login');
}
});


router.post('/back',function(req,res){
  if(username!="" && loggedIn){
    res.render('index', { title: 'Encouraging energy efficiency',user:  username, t_Main: tMain, t_Living: tLiving,
      t_Kitchen: tKitchen, t_Bedroom1: tBedroom1, t_Bedroom2:tBedroom2  });
  }else{
    res.render('login');
  }
});


module.exports = router;
