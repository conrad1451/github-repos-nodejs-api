// const fs = require("fs");
  
// // Read json file.
// //fs.readFile(".info.json", function(err, data) {
// fs.readFile("./info.json", function(err, data) {
//     // Check for the errors.
//     if (err) throw err;
  
//     // Converting to JSON.
//     const myInfo = JSON.parse(data);   
//     console.log(myInfo); // Print users 

//   send(myInfo);
// });
 
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  const username = req.query.username || 'conrad1451';
  try {
    // const result = await axios.get(
    //   `./info.json`
    // );
    const result = await axios.get(
      "./info.json"
    );
  
    res.send(result);
  } catch (error) {
    res.status(400).send('Error while getting the repository');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
