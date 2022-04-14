//@author wonjun park A00423142

const express = require("express"); // start express application
const server = express(); // define top level function
const port = 3026;

server.use(express.json()); // implement JSON recognition
server.use(express.urlencoded({ extended: true })); // implement incoming name:value pairs to be any type

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow any origin
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // allow any method
  res.header("Access-Control-Allow-Headers", "Content-Type"); // accept only headers with this type
  next(); // middleware callback function required for processing
};

server.listen(port, function () {
  server.use(express.static("public"));
  //app.use(fileUpload()); // this will automatically create req.files object

  server.use(express.urlencoded({ extended: false }));
  var values = { 0: "", 1: "", 2: "" };
  //launching express.html on loading into the server
  server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/express.html");
  });

  //calling server.get to do saveText when we click the buttons
  server.get("/saveText", (req, res) => {
    console.log(req.query);
    values[req.query.index] = req.query.data;
    console.log(values);
  });
  //fetching data from text boxes
  server.get("/fetch", (req, res) => {
    res.send(values);
  });
});
