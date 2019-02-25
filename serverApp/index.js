const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = 7777;

const removeUsers = require("./utils/removeUser");



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/removeUser', (req, res) => {
  let user_id = req.params.user_id;
  let group_id= req.params.group_id;
  removeUser(group_id, user_id, res);
});



http.listen(port, function () {
  console.log(`listening on *:${port}`);
});