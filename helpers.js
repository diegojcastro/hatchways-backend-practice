const getRecipeNames = (db) => {
  const recipeNames = [];
  for (const entry of db.recipes) {
    recipeNames.push(entry.name);
  }
  return { recipeNames };
}

module.exports = { getRecipeNames }