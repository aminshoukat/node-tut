const dbConnect = require('./mongodb');

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     });
// });


let main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();

