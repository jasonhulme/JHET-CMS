var db = require('../../core/db.js').db;

exports.site = {

    siteId: function(domain, callBack) {


        db.findOne("jhetcms", "site", {
            url: domain
        }, function(reply) {
            if (reply === null) {
                callBack(null);
            }
            else {
                callBack(reply._id);
            }
        });
    },
    siteName: function(siteID) {
        return 'Demo Site';
    }

};