const itemsToRemove_immersiveengineering = [
  'immersiveengineering:fake_icon_birthday',
  'immersiveengineering:fake_icon_lucky',
  'immersiveengineering:fake_icon_drillbreak',
  'immersiveengineering:fake_icon_ravenholm',
  'immersiveengineering:fake_icon_fried',
  'immersiveengineering:fake_icon_bttf',
  "immersiveengineering:armor_steel_helmet",
  "immersiveengineering:armor_steel_chestplate",
  "immersiveengineering:armor_steel_leggings",
  "immersiveengineering:armor_steel_boots",
];

ServerEvents.recipes((event) => { 
  itemsToRemove_immersiveengineering.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_immersiveengineering.forEach(itemId => {
    event.remove(itemId);
  });


})
