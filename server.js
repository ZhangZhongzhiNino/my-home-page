//require
	const express 		= require('express');
	const pgp 			= require('pg-promise')();
	const bodyParser 	= require('body-parser');
//app
	const app = express();

	//set virw engine to ejs
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '/'))
	//
	app.use(express.static('public'));
	//
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

//database setting
	const dbConfig = {
		host: 'localhost',
		port: 5432,
		database: 'my_home_page',
		user: 'postgres',
		password: ''
	};

	const db = pgp (dbConfig);





//set the port
	app.listen(3000,() => {
		console.log('Example app listening on port 3000!');
	})