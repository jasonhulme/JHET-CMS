var config = require('./config.js');
var mongo = require('mongoskin');


exports.db = {

    connect: function(database, collection) {
        return mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
    },

    insert: function(database, collection, insertJson) {

    },

    find: function(database, collection, query, callBack) {

        connect(database, collection).db.find(query).toArray(function(err, items) {
            if (err) {
               callBack(null);
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

    updateOne: function(database, collection, query, updateJson) {

    },

    updateMany: function(database, collection, query, updateJson) {

    },

    removeOne: function(database, collection, query) {

    },

    removeMany: function(database, collection, query) {


    }

};