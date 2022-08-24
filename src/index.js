import httpServer from './app.js';


httpServer.listen(+process.env.HTTP_PORT, () => console.log(`Connected to port ${process.env.HTTP_PORT}`));