const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function testConnection() {
    console.log(`Testing connection to ${process.env.DB_HOST}:${process.env.DB_PORT}...`);
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            ssl: { rejectUnauthorized: false },
            connectTimeout: 30000
        });
        console.log('SUCCESS: Connected to Aiven MySQL!');
        await connection.end();
    } catch (err) {
        console.error('FAILURE: Could not connect:', err.message);
    }
}

testConnection();
