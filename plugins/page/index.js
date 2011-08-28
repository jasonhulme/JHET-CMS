var db      = require('../../core/db.js').db;
var content = require('../content/').content;


exports.page = {
    exists: function(siteID, pageTitle) {
        return true;
    },

    get: function(siteID, pageTitle, callBack) {
        
        db.findOne('jhetcms', 'page', {
            pageTitle: pageTitle.toString(),
            siteID: siteID.toString()
        }, function(item) {
            if (item == null) {
                callBack(null);
            }
            else {                
                callBack(item.content);
            }
        });
    },

    update: function() {

    },

    create: function(siteID, pageTitle, content, subof) {

    }

};