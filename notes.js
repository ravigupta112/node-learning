console.log("notes.js file calling");
module.exports.age = 25;

//module.exports.addNote = function (){
//    
//}

var addNote = (title, body ) =>{
     console.log("Add note", title, body);
     return "New note";
}


var getAll = () => {
    console.log("List all");
}

module.exports = {
    addNote,
    all:getAll,
    
};
