ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "easy_villagers:iron_farm",
  ];
  
  recipesToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
