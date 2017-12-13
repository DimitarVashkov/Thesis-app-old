var connection = require('./db');

module.exports = {
registerUser: function(name,password){
	connection.query('INSERT INTO users (name,pass) VALUES (?,?)',[name,password], function (err) {
                if (err) throw err;
            });
	return true;
},

insertUserTemperatures: function(name,tMain,tLiving,tKitchen,tBedroom1,tBedroom2){
	connection.query('INSERT INTO userInfo(name,tMain,tLiving,tKitchen,tBedroom1,tBedroom2)'
                 + 'VALUES (?, ?, ?, ?, ?, ?)',[name,tMain,tLiving,tKitchen,tBedroom1,tBedroom2], function (err) {
                if (err) throw err;
            });
	return true;
},

allUsers: function(){
	connection.query('SELECT * FROM users', function (error, results, fields) {
		return results;
	});
},

checkUser: function(name,password,callback){
	connection.query('SELECT * FROM users WHERE name = ?',[name], function (error, results, fields) {
		if(results.length >0){
      		if(results[0].pass == password){
      			callback(true);
      		}else{
      			callback(false);
      		}

		}

	});

	
},


getUserData: function(name,callback){
	connection.query('SELECT * FROM userInfo WHERE name = ?',[name], function (error, results, fields) {
            callback(results[0]);     
      	});
}

};
