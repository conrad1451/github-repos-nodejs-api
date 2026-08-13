// functions/api.js

// CHQ: Gemini AI generated file as a refactor of index.js
// that is suitable for a serverless API

const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// GET /
router.get("/", async (req, res) => {
  // Evaluates dynamically on each incoming request
  const curDate = new Date();

  const responseData = {
    Name: "Conrad",
    Age: "25",
    Date: curDate,
    programming: "python, but sometimes JavaScript ;)",
  };

  try {
    res.json(responseData);
  } catch (error) {
    res.status(400).send("Error generating response");
  }
});

// Route handling for both Netlify's internal path and direct root hits
app.use("/.netlify/functions/api", router);
app.use("/", router);

// Export serverless handler instead of app.listen()
module.exports.handler = serverless(app);
