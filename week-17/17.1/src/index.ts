// this file is the entry point of the application
import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

// const pgClient = new Client("postgresql://neondb_owner:npg_jqIoufEFeb41@ep-lingering-sea-b4n5couw-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_jqIoufEFeb41",
    port: 5432,
    host: "ep-lingering-sea-b4n5couw-pooler.c-6.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});

pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    // const response = await pgClient.query(`insert into users (username, email, password) values('${username}', '${email}', '${password}')`);
    const response = await pgClient.query(`insert into users (username, email, password) values($1, $2, $3) returning id`, [username, email, password]);
    console.log(response);

    const response2 = await pgClient.query(`insert into addresses (city, country, street, pincode, user_id) values($1, $2, $3, $4, $5)`, [city, country, street, pincode, response.rows[0].id]);
    res.json({
        message: "User created successfully"
    });
});

app.listen(3000);