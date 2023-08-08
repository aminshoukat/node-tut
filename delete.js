const dbConnect = require('./mongodb');

const deleteData = async () => {
    let db = await dbConnect();
    // let result = await db.deleteOne(
    //     {name:"11 Pro"}
    // );
    let result = await db.deleteMany(
        {name:"11 Pro"}
    );

    console.log(result);
}

deleteData();