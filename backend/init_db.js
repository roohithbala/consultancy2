const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function initDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        ssl: { rejectUnauthorized: false },
        multipleStatements: true
    });

    try {
        console.log(`Connecting to ${process.env.DB_HOST}:${process.env.DB_PORT}...`);
        const sqlPath = path.join(__dirname, 'setup_database.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        console.log('Reading setup_database.sql... (Length:', sql.length, ')');
        
        console.log('Starting execution...');
        // We'll try to split the SQL into statements to avoid issues with very large multi-statements
        // However, regex splitting SQL is hard. We'll try one big chunk first.
        await connection.query(sql);
        console.log('Database initialized successfully!');

    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await connection.end();
    }
}

initDB();
