var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());
 


app.get('/',function(request,response) {
 var html = fs.readFileSync(htmlfile).toString();
 response.send(html); 
 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
<<<<<<< HEAD

=======
>>>>>>> 88fafe681b37b96d5bc6020a60cf60b31512dd14
