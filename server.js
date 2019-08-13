const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;


app.use(routes);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});