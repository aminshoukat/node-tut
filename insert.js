const dbConnect = require('./mongodb');

let insertData = async () => {
    let db = await dbConnect();
    // let result = await db.insertOne(
    //     {name:"12", category:"Mobile", brand:"APPLE", star:"4.5"}
    // );
    let result = await db.insertMany([
        {name:"11", category:"Mobile", brand:"APPLE", star:"4.5"},
        {name:"12", category:"Mobile", brand:"APPLE", star:"4.5"}
    ]);

    console.log(result);
}

insertData();