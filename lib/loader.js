var fs = require('fs');
var parser = require('./parser.js');

exports.load = function(template) {
    var templatesDir = process.env.HOME + '/directary_templates';
    var content;

    if( fs.existsSync(templatesDir + '/' + template) )
	content = fs.readFileSync(templatesDir + '/' + template, {encoding: 'utf-8'});
    else
	throw "Directory error : Could not locate the provided template .";
    return parser.parse(content);
}


