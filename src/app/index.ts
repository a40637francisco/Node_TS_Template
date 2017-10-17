import { getApp } from './app';
import { getConfigs } from '../configs';
import * as http from 'http';

const configs = getConfigs('test.env');

const app = getApp(configs.server);

const server = http.createServer(app);

const port = configs.server.port;
server.listen(port, function () {
    console.log(`Server stared on port:${port}`);
});

server.on('error', onError);
server.on('listening', onListening);

process.on('SIGINT', () => server.close());


function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

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

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
}