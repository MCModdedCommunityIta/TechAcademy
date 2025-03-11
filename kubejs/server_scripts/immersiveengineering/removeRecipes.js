ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "immersiveengineering:crafting/armor_steel_helmet",
    "immersiveengineering:crafting/armor_steel_chestplate",
    "immersiveengineering:crafting/armor_steel_boots",
    "immersiveengineering:crafting/armor_steel_leggings",
  ];
    
  recipesToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
