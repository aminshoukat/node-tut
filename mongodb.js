// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'store';
const collection = 'products';

async function dbConnect() {

    let result = await client.connect();
    let db = result.db(database);
    return collectionResult = db.collection(collection);
}

module.exports = dbConnect;