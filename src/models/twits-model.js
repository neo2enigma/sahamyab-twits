import { createPool } from '../config/db.js';

const pool = createPool();

// Get records for a given username
export async function getTwits(username) {
    const client = await pool.connect();
    try {
        const twits = await client.query(`SELECT t."id", t."content", t."sendTime", t."typeId", u."userName" 
        FROM twits AS t, users AS u WHERE u."userName" = $1
        AND t."userName" = u."userName"`, [username]);
        return twits.rows;
    } catch (error) {
        throw new Error(error);
    } finally {
        client.release();
    }
}

// Delete record based on twit id
export async function deleteTwit(id) {
    const client = await pool.connect();
    try {
        await client.query(`DELETE FROM twits WHERE "id" = $1`, [id]);
        return true;
    } catch (error) {
        throw new Error(error);
    } finally {
        client.release();
    }
}

// Insert record in twits
export async function addTwit(twit) {
    const client = await pool.connect();
    try {
        const recordId = await client.query(`INSERT INTO twits 
        ("typeId", "content", "sendTime", "userName", "id")
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT("id") 
        DO NOTHING RETURNING "id"
        `,
            [twit.type, twit.content, twit.sendTime, twit.senderUsername, twit.id]);
        console.log(twit);
        return recordId.rows[0];
    } catch (error) {
        throw new Error(error);
    } finally {
        client.release();
    }
}

// Insert record in user
export async function addUser(twit) {
    const client = await pool.connect();
    try {
        await client.query(`INSERT INTO users ("userName","name") 
        VALUES ($1,$2)
        ON CONFLICT ("userName")
        DO NOTHING`, [twit.senderUsername, twit.senderName]);
        return true;
    } catch (error) {
        throw new Error(error);
    } finally {
        client.release();
    }
}