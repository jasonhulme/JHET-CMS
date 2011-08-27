var db = require('./core/db.js').db;
var content = require('./plugins/content/');

db.connect('jhetcms','page').insert([{pageTitle:'new page',content:'blah'}],function(err,replies) {
 if (err) {
     console.log(err);     
 }
 console.log(replies);

});


console.log('temp');