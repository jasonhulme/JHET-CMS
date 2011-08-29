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
        db.findOne(query, function(err, item) {
            if (err) {
                callBack(null);
            }
            else {
                console.log(item);
                if (item == null) {
                    callBack(null);
                }
                else {
                    callBack(item);
                }
            }

        });
        
    },

        findById: function(database, collection, ID, callBack) {

            var db = mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
            db.findById(ID, function(err, item) {
                if (err) {
                    callBack(null);
                }
                else {
                    console.log(item);
                    if (item == null) {
                        callBack(null);
                    }
                    else {
                        callBack(item);
                    }
                }

            });

        },

        find: function(database, collection, query, callBack) {

            var db = mongo.db(config.dbConnect.dbConsole + '/' + database).collection(collection);
            db.find(query).toArray(function(err, items) {
                if (err) {
                    callBack(null);
                    console.log(err);
                }
                else {
                    if (items == null) {
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

        update: function(database, collection, query, updateJson) {

        },

        delOne: function(database, collection, query) {

        },

        del: function(database, collection, query) {


        }

    };