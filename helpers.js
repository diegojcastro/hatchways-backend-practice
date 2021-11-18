const filterByName = (name, db) => {
  return db.recipes.filter( recipe => recipe.name === name);
};

const getRecipeNames = (db) => {
  const recipeNames = [];
  for (const entry of db.recipes) {
    recipeNames.push(entry.name);
  };
  return { recipeNames };
};

const recipeDetails = (name, db) => {
  const fullRecipe = filterByName(name, db);
  if (fullRecipe.length === 0) {
    return {};
  }
  const ingredients = [...fullRecipe[0].ingredients];
  const numSteps = fullRecipe[0].instructions.length;
  return {
    details: {
      ingredients,
      numSteps
    }
  };
};

const addRecipe = (name, db, body) => {
  if (filterByName(name,db).length > 0) {
    return {error: "Recipe already exists"}
  };
  db.recipes.push(body);
  console.log(body);

};


module.exports = { getRecipeNames, recipeDetails, addRecipe }