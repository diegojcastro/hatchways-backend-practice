const getRecipeNames = (db) => {
  const recipeNames = [];
  for (const entry of db.recipes) {
    recipeNames.push(entry.name);
  }
  return { recipeNames };
}

const recipeDetails = (name, db) => {
  const fullRecipe = db.recipes.filter( recipe => recipe.name === name);
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
}

module.exports = { getRecipeNames, recipeDetails }