//var obj = {name:'ravi'};
//
//var stringObj = JSON.stringify(obj);
//
//console.log(typeof stringObj);
//
//console.log(stringObj);

//console.log(JSON.parse(stringObj));

const fs = require('fs');

var orginal = {
    title : "single title",
    body : 'content'
};

fs.writeFileSync('notes.txt', JSON.stringify(orginal));


var noteString = fs.readFileSync('notes.txt');
//console.log(noteString);
var note = JSON.parse(noteString);
console.log(note.title);


