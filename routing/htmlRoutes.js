// Written by John R. Thurlby May 2018

const path = require("path");


// Routes
// =============================================================

module.exports = function(app)
{
    // Basic route that sends the user first to the AJAX Page
    

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/index.html"))
    })

    app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/index.html"))
    })

}