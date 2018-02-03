const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');
var user = os.userInfo();

//fs.appendFile('gettings.txt', "hello");
//fs.appendFile('gettings.txt', `Hello ${user.username}! age is ${notes.age}`);

// npm install nodemon -g

var uniqueArr = _.uniq(['a','b',3,6,2,4,2,3,'a']);

console.log(uniqueArr);