const itemsToRemove_miningutility = [
  "miningutility:mini_torch"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_miningutility.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_miningutility.forEach(itemId => {
    event.remove(itemId);
  });
})



