// import app from './express-app.js';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

//  Global middlewares
function globalMiddlewares(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());
    app.use(cors());
    app.use((req, res, next) => {
        // console.log('Middleware passed');
        next();
    });
    // app.use(errors);
}

export default globalMiddlewares;
