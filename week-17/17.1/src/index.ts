import { Client } from "pg";

// const pgClient = new Client("postgresql://neondb_owner:npg_jqIoufEFeb41@ep-lingering-sea-b4n5couw-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_jqIoufEFeb41",
    port: 5432,
    host: "ep-lingering-sea-b4n5couw-pooler.c-6.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});

async function main(){
    await pgClient.connect();
    const response = await pgClient.query("update users set email = 'mayur@gmail.com' where id=2 and username = 'mayur'");
    console.log(response.rows);
    // this await pgClient.end() is important to close the connection to the database after the query is executed. If you don't close the connection, it will remain open and can lead to resource leaks or hitting connection limits.
    await pgClient.end();
};
main();