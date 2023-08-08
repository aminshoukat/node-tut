const dbConnect = require('./mongodb');

const updateData = async () => {
    let db = await dbConnect();
    // let result = await db.updateOne(
    //     {name:"11"},
    //     {
    //         $set: {name:"11 Pro", star:"4.9"}
    //     },
    // );
    let result = await db.updateMany(
        {name:"11"},
        {
            $set: {name:"11 Pro", star:"4.9"}
        },
    );

    console.log(result);
}

updateData();