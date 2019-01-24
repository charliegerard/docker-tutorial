const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getData', function(req, res){
  res.send('hello world');
});

app.listen(5000, () => console.log("Listening on port 5000"))
