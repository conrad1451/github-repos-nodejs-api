const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 8081;

let curDate = new Date();
const dict = {
        "Name":"Conrad", 
        "Age":"24",
        "Date":curDate,
        "programming":"python, but sometimes JavaScript ;)"
        }

app.get('/', async (req, res) => {
   let dict2 = {
        "Name":"Conrad", 
        "Age":"25",
        "Date":curDate,
        "programming":"python, but sometimes JavaScript ;)"
        }
  try {  
          res.send(dict2);
  } catch (error) {
    res.status(400).send('Error while getting the repository');
  }
});

// app.get('/', (req, res) => {
//   let dictToString = JSON.stringify(dict);
//   res.send(dictToString)
// })

app.listen(PORT, function (err) {
if (err) console.log(err);
console.log("Server listening on PORT", PORT);
});
