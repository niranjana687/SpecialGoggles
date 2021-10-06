const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database :(');
    }

    console.log('Connected to database :D');
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Niranjana',
    //     age: 20,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.');
    //     }
    //     console.log(result.ops);
    // });
//     db.collection('users').insertMany([
//     {
//         name: 'Niranjana',
//         age: 21,
//     }, {
//         name: 'Adil',
//         age: 21,
//     }
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to insert documents');
//     }
//     console.log(result.ops);
// });
db.collection('tasks').insertMany([
    {
        description: 'Ace the test',
        completed: true,
    }, 
    {
        description: 'Correct sleeping schedule',
        completed: false,
    }
], (error, result) => {
    if (error) {
        return console.log('unable to add tasks!');
    }
    console.log(result.ops);
});
});