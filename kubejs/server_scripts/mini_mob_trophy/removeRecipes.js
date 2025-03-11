ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "mini_mob_trophy:dna_collector",
    "mini_mob_trophy:trophy_table_crafting_recipe",
  ];

  recipesToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
