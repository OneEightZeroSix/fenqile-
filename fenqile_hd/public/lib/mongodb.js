    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'fenqile';

    // 封装mongodb

    function query(callback) {
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            callback(db);
            client.close();
        });
    }
    module.exports = {
        query: query
    }