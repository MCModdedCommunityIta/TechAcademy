const itemsToRemove_compactmachines = [
  'compactmachines:machine',
  'compactmachines:spatial_workbench',
  'compactmachines:solid_wall',
  'compactmachines:new_machine[compactmachines:room_template="compactmachines:empty",compactmachines:machine_color="#FFFFFF"]',
];

ServerEvents.recipes((event) => { 
  itemsToRemove_compactmachines.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_compactmachines.forEach(itemId => {
    event.remove(itemId);
  });
})



