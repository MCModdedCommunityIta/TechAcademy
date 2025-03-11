ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "miningutility:mini_torch",
  ];
  
  recipesToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
