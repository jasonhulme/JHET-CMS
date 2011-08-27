var config = require('config.js');
var mongo = require('mongoskin');


exports.db = {

    connect: function() {        
        return mongo.db(config.dbConnect.dbConsole() + '/' + database).collection(table);
    },

    insert: function(database, collection, insertJson) {

    },

    select: function(database, collection, query, callBack) {

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