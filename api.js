const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.find().toArray();
    resp.send(result);

});

app.post('/', async (req, resp) => {

    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    resp.send(result);

});

app.put('/:name', async (req, resp) => {

    let db = await dbConnect();
    let result = await db.updateOne(
        {name:req.params.name},
        {$set: req.body}

    );
    resp.send(result);

});

app.delete('/:id', async (req, resp) => {

    let db = await dbConnect();
    let result = await db.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)}
    );
    resp.send(result);

});

app.listen(5000);