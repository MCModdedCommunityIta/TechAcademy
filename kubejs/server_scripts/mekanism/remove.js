const itemsToRemove_mekanism = [];
const idToRemove_mekanism = [
  'mekanism:rails'
];

ServerEvents.recipes((event) => { 
  itemsToRemove_mekanism.forEach((itemID) => {
    event.remove({ output: itemID });
  });
  
  idToRemove_mekanism.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});




RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_mekanism.forEach(itemId => {
    event.remove(itemId);
  });
})



