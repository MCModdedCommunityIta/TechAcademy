const itemsToRemove_oritech = [];
const idToRemove_oritech = [
  'oritech:centrifuge/fluid/compat/create/clump/zinc',
  'oritech:centrifuge/compat/create/clump/zinc',
  "oritech:centrifuge/fluid/compat/mekanism/clump/lead",
  "oritech:centrifuge/fluid/compat/mekanism/clump/osmium",
  "oritech:centrifuge/fluid/compat/mekanism/clump/tin"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_oritech.forEach((itemID) => {
    event.remove({ output: itemID });
  });
  
  idToRemove_oritech.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});




RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_oritech.forEach(itemId => {
    event.remove(itemId);
  });
})



