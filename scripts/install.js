var fs = require('fs');
var logContent;
var templatesDir = process.env.HOME + '/directary_templates';

logContent = "Directary : Creating folder at HOME/directary_templates.";
logContent += "All the templates for use with Directary should be placed under this directory.";
console.log(logContent);

if( !fs.existsSync(templatesDir) ) 
   fs.mkdirSync(templatesDir);
