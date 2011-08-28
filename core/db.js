var config = require('./config.js');
var mongo = require('mongoskin');


exports.db = {

    connect: function(database, collection) {
        return mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
    },

    insert: function(database, collection, insertJson, callBack) {

        var db = mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
        db.insert(insertJson, function(err, replies) {
            if (err) {
                callBack(null);
            }
            else {
                callBack(replies);
            }
        });

    },
    
    findOne: function(database, collection, query, callBack) {

        var db = mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
        db.findOne(query,function(err, items) {
            if (err) {
                callBack(null);
                console.log(err);
            }
            else {
                if (items === null) {
                    callBack(null);                    
                }
                else {
                    callBack(items);                   
                }
            }

        });

    },
    
    findMany: function(database, collection, query, callBack) {

        var db = mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
        db.find(query).toArray(function(err, items) {
            if (err) {
                callBack(null);
                console.log(err);
            }
            else {
                if (items === null) {
                    callBack(null);
                    console.log('not found');
                }
                else {
                    callBack(items);
                    console.log(items);
                }
            }

        });

    },

    updateOne: function(database, collection, query, updateJson) {

    },

    updateMany: function(database, collection, query, updateJson) {

    },

    removeOne: function(database, collection, query) {

    },

    removeMany: function(database, collection, query) {


    }

};