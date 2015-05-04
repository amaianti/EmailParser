var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/parse/', function(request, response) {
	console.log(request.body);
	var res = {"error":false,"emailParsed":""};
	response.send(res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
