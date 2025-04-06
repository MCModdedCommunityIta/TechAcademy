const itemsToRemove_mini_mob_trophy = [
  "mini_mob_trophy:dna_collector",
  "mini_mob_trophy:trophy_table"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_mini_mob_trophy.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_mini_mob_trophy.forEach(itemId => {
    event.remove(itemId);
  });
})



