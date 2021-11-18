const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ extended: true }));
const PORT = process.env.PORT || 3000;

const allData = require('./data.json');
const { getRecipeNames, recipeDetails, addRecipe, updateRecipe } = require('./helpers.js');

app.get('/', (req, res) => {
  res.send("All systems go 👍🏽");
});

app.get('/recipes/details/:recipeName', (req, res) => {
  const name = req.params.recipeName;
  res.json(recipeDetails(name, allData));
});

app.get('/recipes', (req, res) => {
  res.json(getRecipeNames(allData));
});

app.get('/debug', (req, res) => {
  res.json(allData);
})

app.post('/recipes', (req, res) => {
  const body = req.body;
  const result = addRecipe(allData, body);
  result ? res.status(400).json(result) : res.status(201).json();
});

app.put('/recipes', (req, res) => {
  const body = req.body;
  const result = updateRecipe(allData, body);
  console.log("I think result was:");
  console.log(result);
  result ? res.status(404).json(result) : res.status(204).json();

})

app.listen(PORT, () => {
  console.log(`Practice app listening on port ${PORT}!`);
});