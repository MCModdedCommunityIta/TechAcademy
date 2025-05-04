const itemsToRemove_oritechthings = [
  "oritechthings:infested_amethyst_block",
  "oritechthings:frame_placer",
  "oritechthings:advanced_target_designator"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_oritechthings.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_oritechthings.forEach(itemId => {
    event.remove(itemId);
  });
})
