
var content = require('./plugins/content/').content;


content.get('4e597a6eebe706ce6a000001', 'about us', function(reply) {
    console.log(reply);
});


console.log('temp started');