
exports.page  = 
{
	exists: function(siteID,pageName)
	{
		return true;	
	},
	
	get: function(siteID,pageTitle)
	{
		var db = dbconn.connect("cms","page");		
		db.find({pageTitle:pageTitle.toString(),siteID:siteID.toString()}).toArray(function(err, items)
		{				
			if (items==null) 
			{
				return null;					
			}
			else
			{
				return items[0].content;															
			}
		});
	},
	
	update: function() {
	 	
	},
	
	create: function(siteID,pageTitle,content,subof)
	{
			
	}

};