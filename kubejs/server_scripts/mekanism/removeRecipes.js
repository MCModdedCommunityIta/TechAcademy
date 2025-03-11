ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "mekanism:rails",
  ];
  
  recipesToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
