var loaderUtils = require("loader-utils");
var path = require("path");

module.exports = function ( pathFoldersSplit ) {

	if(!pathFoldersSplit) {
		pathFoldersSplit = ['src','components','foreignComponents']
	}
	
	if(typeof pathFoldersSplit == 'string') {
		pathFoldersSplit = [pathFoldersSplit];
	}

	return { 
        //localIdentName: '[path][name]-[local]-[hash:base64:5]',
		localIdentName: '[path][name]-[local]', 
		getLocalIdent: function(loaderContext, localIdentName, localName, options){ 
			var request = path.relative(path.resolve('./'), loaderContext.resourcePath);
			options.content = options.hashPrefix + request + "+" + localName;
			localIdentName = localIdentName.replace(/\[local\]/gi, localName);
			var hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
			return hash
				.replace(new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g"), "-")
				.replace(/^((-?[0-9])|--)/, "_$1")
				.replace(/styles-|index-/, "")
				.replace(new RegExp("(.*)(" + pathFoldersSplit.join('-?|') +  "-?)(.*)"), "$3");  
		}
	} 
} 