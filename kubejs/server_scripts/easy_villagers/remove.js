const itemsToRemove_easy_villager = [
  'easy_villagers:iron_farm'
];

ServerEvents.recipes((event) => { 
  itemsToRemove_easy_villager.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_easy_villager.forEach(itemId => {
    event.remove(itemId);
  });
})



