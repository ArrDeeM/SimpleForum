const app = require('../app');
const debug = require('debug')('server:server');
const http = require('http');

const normalizePort = (val) => {
	let port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

const onError = (error) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
};

const onListening = () => {
	let addr = server.address();
	let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
};

const PORT = normalizePort(process.env.PORT || '4000');
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);
console.log("Back-end is up and running!");
console.log(`Listening on Port Number ${PORT}!\n`);

process.on('SIGINT', () => {
	console.log('\nSIGINT signal received.');
	console.log('Closing server.');

	server.close(() => {
		console.log('Server closed.');
		
		connectionPool.end((err) => {
			console.log('mySQL connections closed.');
			process.exit(0);
		});
	})

});
