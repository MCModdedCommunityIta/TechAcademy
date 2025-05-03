//rimozione recipe doppie

ServerEvents.recipes(event => {

  event.remove({id: "extrastorage:part/storagepart_1048576b_fluid"})

  event.forEachRecipe({ type: 'minecraft:crafting_shaped' }, recipe => {
    let recipeId=`${recipe.id}`
    if (recipeId.includes("extrastorage:disk") || recipeId.includes("extrastorage:storage_block")){
      event.remove({ id: recipeId });
    }
  });
  event.forEachRecipe({ type: 'minecraft:crafting_shapeless' }, recipe => {
    let recipeId=`${recipe.id}`
    if (recipeId.includes("extrastorage:disk") || recipeId.includes("extrastorage:disk")){
      event.remove({ id: recipeId });
    }
  });
});