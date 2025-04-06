const itemsToRemove_enderio = [
  'enderio:enderface_mobs',
  'enderio:enderface_invpanel',
  'enderio:enderface_none',
  'enderio:enderface_items',
  'enderio:enderface_materials',
  'enderio:enderface_machines',
  'enderio:enderface_conduits'
];

ServerEvents.recipes((event) => { 
  itemsToRemove_enderio.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_enderio.forEach(itemId => {
    event.remove(itemId);
  });
})



