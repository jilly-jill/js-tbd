require("dotenv").config();

const express = require("express");
const { getMarvelCharacterData } = require("./Helpers");

const app = express();

const PORT = 3030;

app.get("/characters", async (req, res) => {
  const marvelData = await getMarvelCharacterData();

  res.send(marvelData);
});

app.listen(PORT, () => {
  console.log("Listening... watcha say?");
});