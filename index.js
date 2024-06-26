const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  const username = req.query.username || 'conrad1451';
  try { 
    const result = await axios.get(
      `./info.json`
    );
  
    res.send(result);
  } catch (error) {
    res.status(400).send('Error while getting the repository');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
