const itemsToRemove_utilitarian = [
  "utilitarian:snad",
  "utilitarian:red_snad",
  "utilitarian:soul_snad",
  "utilitarian:drit",
  "utilitarian:grrass"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_utilitarian.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_utilitarian.forEach(itemId => {
    event.remove(itemId);
  });
})
