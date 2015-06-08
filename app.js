var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var responder = function (req, res) {
  var code = parseInt(req.params.requestedCode);
  console.log('Responding with code: ', code);
  res.sendStatus(code);
};

app.all('/', function (req, res) {
  res.redirect('https://github.com/aisaacs/errorize');
});

app.get('/:requestedCode', responder);
app.post('/:requestedCode', responder);
app.put('/:requestedCode', responder);

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Request Echo listening at http://%s:%s', host, port);

});
