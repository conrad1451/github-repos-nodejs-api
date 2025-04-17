const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;
app.use(express.json());

// Global variable to store the fetched database
let cachedDatabase = null;

// Middleware to fetch and cache the database on any GET request
app.use(async (req, res, next) => {
    const allowedOrigins = ["http://localhost:5173", "http://localhost:5174", "https://personaldatafrontend.vercel.app", "https://careerinfo.vercel.app"];
    const origin = req.headers.origin;

    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
        );
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Max-Age", 7200);
    }

    if (req.method === 'GET' && !cachedDatabase) {
        try {
            cachedDatabase = await getDatabase();
            console.log('Database fetched and cached.');
        } catch (error) {
            console.error("Error fetching initial database:", error);
            return res.status(500).json({ error: "Failed to fetch initial database" });
        }
    }
    next();
});

app.options("/submitformhere", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
});

app.get('/', async (req, res) => {
  const username = req.query.username || 'conrad1451';
  try {
    const result = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = result.data
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        languagesURL: repo.languages_url
      }))
      .sort((a, b) => b.stars - a.stars);

    res.send(repos);
  } catch (error) {
    res.status(400).send('Error while getting list of repositories');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
