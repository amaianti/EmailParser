var express = require('express');
var bodyParser = require('body-parser');
var $ = require('cheerio');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/parse/', function(request, response) {
	//console.log(request.body);

	console.log(extractEmails(request.body.mess));

	var email = $.load(request.body.mess);
	email('table').map(function(i, foo){
		foo = $(foo);
		console.log('**** ' + foo.html());
	});

	var res = {"error":false,"emailParsed":""};
	response.send(res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function extractEmails (text)
{
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
