var db = require('../../core/db.js').db;


exports.skin = {

    get: function(skinID, siteID, callBack) {

        db.findById('jhetcms', 'skin', skinID, function(skinHtml) {
            if (skinHtml == null) {
                callBack(null);
            }
            else {
                if (siteID == skinHtml.siteID) {
                    callBack(skinHtml.templateHTML);
                }
                else {
                    callBack(null);
                }

            }
        })

    }

};