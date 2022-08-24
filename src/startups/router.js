import routerTwits from '../routers/twits-router.js';
import routerError from '../startups/errors.js';

// Routing middleware
function routers(app) {
    app.use(`${process.env.API_ENDPOINT}/twits`, routerTwits);
    app.use(routerError);
}

export default routers;