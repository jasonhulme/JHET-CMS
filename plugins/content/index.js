var db = require('../../core/db.js').db;

exports.content = {

    get: function(siteID, pageTitle, callBack) {

        db.findOne('jhetcms', 'page', {
            active: 1,
            siteID: siteID,
            pageTitle: pageTitle
        }, function(replies) {
            callBack(replies.content);
        });
    }

};