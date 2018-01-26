var app = require('../app.js');
var http =  require('http');
var debug = require('debug')('node-rest:server');

var port = 5000;
app.set('port', port);

//Create HTTP Server

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListen);

// app.listen(port, ()=> {
//     console.log("Server started at -" + port);
// });



//server.on Events Handle

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListen() {
    var addr = server.address().port;
      console.log("Listening to the port no :-" + addr);

    // var bind = typeof addr === 'string'
    //   ? 'pipe ' + addr
    //   : 'port ' + addr.port;
    // debug('Listening on ' + bind);
  }
  


