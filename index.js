const express = require('express');
const app = express();

const PORT = 3000;

const dict = {"one" : [15, 4.5],
        "two" : [34, 3.3],
        "three" : [67, 5.0],
        "four" : [32, 4.1]};

app.get('/', (req, res) => {
  let dictstring = JSON.stringify(dict);
  res.send(dictstring)
})

app.listen(PORT, function (err) {
if (err) console.log(err);
console.log("Server listening on PORT", PORT);
});
