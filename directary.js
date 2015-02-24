#!/usr/bin/env node

// Fetches the template name to be used.
var template = process.argv[2];
var dLoader = require("./lib/loader.js");
var builder = require("./lib/builder.js");

if(!template || template.trim() == '') {
    var output = "\n  You havent provided a template file.\n";
    output += "  Run again by passing a valid template file. Example : \n";
    output += "  prompt>>directary example_template\n";
    output += "  Note : Templates will be checked in the user's HOME/directary_templates";
    output += "\n  directory.\n";
    output += "  If you want to create a new template, make one and add it there.\n";
    output += "  The format of the template file is simple, indent sub directories with\n"; 
    output += "  2 spaces.\n";
    output += "  Firstmost line should not contain any leading spaces. Example : \n";
    output += "  DirA\n    DirAA\n    DirAb\n  DirB\n    DirBA\n    DirBB\n";
    console.log(output);
}
else {
    var dirStruct = dLoader.load(template);
    builder.build(dirStruct);
}

