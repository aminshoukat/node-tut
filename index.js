// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'store';
const collection = 'products';

async function getData() {

    let result = await client.connect();
    let db = result.db(database);
    let collectionResult = db.collection(collection);
    let response = await collectionResult.find({}).toArray();
    console.log(response);

}

getData();