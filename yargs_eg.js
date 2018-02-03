const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');
var user = os.userInfo();

//fs.appendFile('gettings.txt', "hello");
//fs.appendFile('gettings.txt', `Hello ${user.username}! age is ${notes.age}`);

// npm install nodemon -g

//var uniqueArr = _.uniq(['a','b',3,6,2,4,2,3,'a']);
//
//console.log(uniqueArr);


//node app.js test
//console.log(process.argv[2]);
 
//node app.js test --title="first title" 
//console.log(process.argv);


const yargs = require('yargs');

var args = yargs.argv;
console.log(args);
  
notes.all();
notes.addNote("title", "body");