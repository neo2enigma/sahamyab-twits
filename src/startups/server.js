import http from 'http';

// Singleton server instace creation
class Server {
    _server;
    constructor() { }

    static getInstance(app) {
        if (!this._server)
            this._server = http.createServer(app);

        return this._server;
    }
}



export default Server;