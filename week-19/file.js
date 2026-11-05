const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function fetchTop100() {
    const client = new MongoClient(uri);
// comment
    try {
        await client.connect();

        const db = client.db("your_database_name");
        const collection = db.collection("your_collection_name");

        const docs = await collection
            .find({})
            .limit(100)
            .toArray();

        console.log(`Total records fetched: ${docs.length}`);
        console.log(docs);

        return docs;

    } catch (error) {
        console.error("Error fetching documents:", error);
    } finally {
        await client.close();
    }
}

fetchTop100();