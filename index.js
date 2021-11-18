const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const allData = require('./data.json');
const { getRecipeNames, recipeDetails } = require('./helpers.js');

app.get('/', (req, res) => {
  res.send("All systems go 👍🏽");
})

app.get('/recipes/details/:recipeName', (req, res) => {
  const name = req.params.recipeName;
  res.json(recipeDetails(name, allData));
})

app.get('/recipes', (req, res) => {
  res.json(getRecipeNames(allData));
})

app.listen(PORT, () => {
  console.log(`Practice app listening on port ${PORT}!`);
});