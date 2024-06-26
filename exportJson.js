const fs = require("fs");
  
// Read json file.
//fs.readFile(".info.json", function(err, data) {
fs.readFile("./info.json", function(err, data) {
    // Check for the errors.
    if (err) throw err;
  
    // Converting to JSON.
    const myInfo = JSON.parse(data);   
    console.log(myInfo); // Print users 

  send(myInfo);
});
