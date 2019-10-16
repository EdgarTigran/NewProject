var http = require('http'),
  fs = require('fs');

http.createServer(function (req, res) {

  if (req.url.indexOf('.html') != -1) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });

  }

  if (req.url.indexOf('.js') != -1) {

    fs.readFile(__dirname + '/jquery.js', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });

  }

  if (req.url.indexOf('.css') != -1) {

    fs.readFile(__dirname + '/style.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });

  }

}).listen(3000);
console.log('Server running');