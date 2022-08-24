import pg from 'pg';

export function createPool() {

    const pool = new pg.Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: +process.env.DB_PORT,
    });
    return pool;
}

