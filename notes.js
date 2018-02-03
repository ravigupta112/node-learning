console.log("notes.js file calling");
module.exports.age = 25;

//module.exports.addNote = function (){
//    
//}

module.exports.addNote = () =>{
     console.log("Add note");
     return "New note";
}