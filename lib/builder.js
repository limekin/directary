var fs = require('fs');
var path = require('path');

exports.build = function(dirs) {
    console.log("Starting to build ...");
    dirs.forEach( function(dir) {
	if(!fs.existsSync(dir)) {
	    if(path.extname(dir) == '') {
		console.log("Creating : " + dir + "...");
		fs.mkdirSync(dir);
		console.log("Done !");
	    }
	    else {
		console.log("Creating file : " + dir + "...");
		fs.writeFileSync(dir,'');
		console.log("Done !");
	    }
	}
    });
    return 0;
}
