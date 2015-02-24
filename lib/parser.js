
//Returns the number of leading spaces of a line.
// '  Folder' (to) 2
var getIndent = function(line) {
    var characters = line.split('');
    var ret = 0;
    
    for(var i =0 ; characters[i] == ' ' &&i < characters.length; ++i) 
	ret += 1;

    return ret;
}


//Removes the inner most directory from a path.
// ./Folder/SubFolder (to) ./Folder
var cdPath = function(path) {
    var dirs = path.split('/');
    var ret = dirs.slice(0, dirs.length - 1).join('/');
    return ret;
}


//Checks if all the lines of the file follows the same indentation rules.
var checkSyntax = function(content) {
    var lines = content.split("\n");
    var indentationStack = [0];
    var tp = 0;

    for(var i = 0; i < lines.length; ++i) {
	indent = getIndent(lines[i]);
	while( tp >= 0 ) {
	    if( indentationStack[tp] == indent ) {
		indentationStack[++tp] = indent + 2;
		break;
	    }
	    tp--;
	}
	if(tp < 0) return false;
    }
    return true;		

}

//Parses the content into json if the checkSyntax returns true.
exports.parse = function(content) {
    if( checkSyntax(content) == false ) throw "Parsing error, check the indentation again."

    var ret = [];
    var lines = content.split("\r\n");
    var path = ".";
    var currentIndent = 0;
    for(var i = 0; i < lines.length; ++i) {
	var indent = getIndent(lines[i]);

	while(indent != currentIndent) {
	    currentIndent -= 2;
	    path = cdPath(path);
	}
	ret.push(path + '/' + lines[i].trim());
	path = path + '/' + lines[i];
	currentIndent = indent + 2;
    }
    return ret;
}
