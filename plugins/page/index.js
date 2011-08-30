var db = require('../../core/db.js').db;
var content = require('../content/').content;
var skin = require('../skin/').skin;

exports.page = {
    exists: function(siteID, pageTitle) {
        return true;
    },

    get: function(siteID, pageTitle, callBack) {


        content.get(siteID, pageTitle, function(page) {
            if (page == null) {
                callBack(null);
                console.log('page not found' + siteID + pageTitle);
            }
            else {
                skin.get(page.skinID, page.siteID, function(skinHtml) {
                    if (skinHtml == null) {
                        callBack(null);
                        console.log('skin not found site:' + siteID + ' skin:' + page.skinID + ' pageID:' + page._id);
                    }
                    else { 

                        var pageConent = skinHtml;
                        pageConent = pageConent.replace(/\[\[content {area:\"main\"}\]\]/g, page.content);
                        pageConent = pageConent.replace(/\{\{pageTitle\}\}/g, page.pageTitle);
                        pageConent = pageConent.replace(/\{\{pageID\}\}/g, page._id);
                        callBack(pageConent);
                    }

                });

            }
        });

    },

    update: function() {

    },

    create: function(siteID, pageTitle, content, subof) {

    }

};