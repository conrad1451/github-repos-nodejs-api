const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;
// const PORT = 3000;

let curDate = new Date();
const dict = {
        "Name":"Conrad", 
        "Age":"24",
        "Date":curDate,
        "programming":"python, but sometimes JavaScript ;)"
        }

app.get('/', (req, res) => {
  let dictToString = JSON.stringify(dict);
  res.send(dictToString)
})

app.listen(PORT, function (err) {
if (err) console.log(err);
console.log("Server listening on PORT", PORT);
});
