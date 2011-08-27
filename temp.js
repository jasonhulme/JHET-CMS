var db = require('./core/db.js').db;
var content = require('./plugins/content/');

db.connect('jhetcms', 'page').insert([{
    pageTitle: 'new page',
    content: 'blah'
}], function(err, replies) {
    if (err) {
        console.log(err);
    }
    console.log(replies);

});

db.find('jhetcms', 'page', [{
    pageTitle: 'home'
}], function(items) {
    console.log(items);
});


console.log('temp');