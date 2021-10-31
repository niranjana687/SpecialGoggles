//Destructuring mongoDB
const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id.length);
console.log(id.getTimestamp());
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database :(');
    }

    console.log('Connected to database :D');
    const db = client.db(databaseName);
    
    //function to find user.
    db.collection('users').findOne({ name: 'Niranjana'}, (error, user) => {
        if (error) {
            return console.log(`User ${name} not found`);
        }
        console.log(user);
    });

    db.collection('users').find({age: 21});
    
    //fetch all tasks that are not completed
    //to array is used to convert the cursor to array and also for callback option.
    db.collection('tasks').find({completed : false}).toArray((error, task) => {
        if(error) {
            return console.log('Unable to fetch tasks, try again later. Troubkeshoot to know more.');
        } else if (task.length == 0) {
            return console.log('All tasks are complete!');
        }
        console.log(task);
    });

    //find the last task by ID.
    db.collection('tasks').findOne({_id: new ObjectId("61537ba2e37fe8d697f1c18c")}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch task!');
        }
        console.log(task);
    })
});
