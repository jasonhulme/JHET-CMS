var db = require('../../core/db.js').db;


exports.skin = {

    get: function(skinID, siteID, callBack) {

        db.findById('jhetcms', 'skin', skinID, function(skinHtml) {
            if (skinHtml == null) {
                callBack(null);
                console.log('{siteID:"' + siteID + '", _id:"' + skinID + '"}');
            }
            else {
                callBack(skinHtml.templateHTML);
            }
        })

    }

};