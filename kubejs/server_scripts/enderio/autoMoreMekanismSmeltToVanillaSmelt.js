ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'moremekanismprocessing:tag_smelting' }, recipe => {

    // let ingredients = recipe.originalRecipeIngredients[0].stackArray // returns a List<Ingredient>
    // let output = recipe.originalRecipeResult
    // let unifiedOutput = AlmostUnified.getRelevantItemTag(output) == null ? Item.of(output.id,1) : AlmostUnified.getTagTargetItem(AlmostUnified.getRelevantItemTag(output)).withCount(1)
    
    // ingredients.forEach(ingredient => {

    //   if (ingredient.id.startsWith(modid + ":")) {

    //     event.recipes.enderio.alloy_smelting(
    //       //output
    //       unifiedOutput,
    //       //input
    //       [ingredient]
    //     ).energy(1500);
    //   }
    // })

    let newrecipe = JSON.parse(recipe.json)

    event.smelting(newrecipe["result"], newrecipe["ingredient"]).xp(newrecipe["experience"]).cookingTime(newrecipe["cookingtime"]);

  });
});
