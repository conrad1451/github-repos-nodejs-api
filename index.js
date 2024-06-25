const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  const username = req.query.username || 'conrad1451';
  try {
    const result = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const theRepo = result.data[0];
    // const repo =  {
    //     name: theRepo.name,
    //     url: theRepo.html_url,
    //     description: theRepo.description,
    //     stars: theRepo.stargazers_count,
    //     repoCount: result.length();
    //   };
    const repo =  {
        name: theRepo.name,
        url: theRepo.html_url,
        description: theRepo.description,
        stars: theRepo.stargazers_count
    };

    res.send(repo);
  } catch (error) {
    res.status(400).send('Error while getting the repository');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
