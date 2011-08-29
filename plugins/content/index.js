var db = require('../../core/db.js').db;

exports.content = {

    get: function(siteID, pageTitle, callBack) {
        
        db.findOne('jhetcms', 'page', {
            pageTitle: pageTitle.toString(),
            siteID: siteID.toString()
        }, function(item) {
            if (item == null) {
                callBack(null);
            }
            else {                
                callBack(item);
            }
        });
    }

};