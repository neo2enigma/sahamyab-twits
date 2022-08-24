import './startups/load-env.js';
import Server from './startups/server.js';
import globalMiddlewares from './startups/global-middlewares.js';
import app from './startups/express-app.js';
import routers from './startups/router.js';


const httpServer = Server.getInstance(app);

// Middlewares and routers
globalMiddlewares(app);
routers(app);


// Handle uncaught exeptions
process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception: ', err);
    process.nextTick(process.exit(1));
});


export default httpServer;