const  express = require("express");
const http = require('http');


const  app = express();
app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('layout');
  });

  const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app

const server = http.createServer(app);
// Listen to server
server.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});

