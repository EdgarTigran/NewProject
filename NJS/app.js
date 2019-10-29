const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// app.get('/style.css', function (req, res) {
//     res.sendFile(__dirname + '/style.css');
// });
// app.get('/jquery.js', function (req, res) {
//     res.sendFile(__dirname + '/jquery.js');
// })




module.exports = app