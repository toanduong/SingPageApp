var http 			= require('http');
var express 		= require('express'),
	app				= express(),
	mailer			= require('nodemailer'),
	bodyParser 		= require('body-parser'),
	mongoose 		= require('mongoose'),
	usersController	= require('./server/controllers/users');

var port = process.env.PORT || 5000

//connect mongodb
mongoose.connect('mongodb://toandm:colong1986@ds047812.mongolab.com:47812/heroku_h651qktt');

// create reusable transporter object using SMTP transport
var transporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'duongmanhtoan86@gmail.com',
        pass: 'colong@123'
    }
});


//register bodyParser
//app.use(bodyParser());
app.use(express.static(__dirname + "/"))
//use font
app.use("/fonts", express.static(__dirname + '/public/fonts'));

//use images
app.use("/imgs", express.static(__dirname + '/public/imgs'));

//use style css
app.use("/css", express.static(__dirname + '/public/css'));

//use script
app.use("/js", express.static(__dirname + '/public/js'));

//use views
app.use("/views", express.static(__dirname + '/public/views'));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

//register user controller
app.get('/api/users', usersController.get);
app.post('/api/users', usersController.create);

//send email
app.get('/api/sendmail', function(req, res){
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: req.param('email'), // sender address
	    to: 'duongmanhtoan86@gmail.com', // list of receivers
	    subject: req.param('subject'), // Subject line
	    text: req.param('description'), // plaintext body
	    html: req.param('description') // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		console.log(info);
		var results = [];
		results.push(info);
	    if(error){
			results.push(error);
			res.json(results);
	    }else{
			res.json(results);
	    }
	});
});

var server = http.createServer(app);
server.listen(port);
