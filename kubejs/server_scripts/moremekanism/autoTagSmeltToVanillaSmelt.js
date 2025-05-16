ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'moremekanismprocessing:tag_smelting' }, recipe => {

    let newrecipe = JSON.parse(recipe.json)
    
    event.remove({id: recipe.getId()})
    event.smelting(newrecipe["result"], newrecipe["ingredient"]).xp(newrecipe["experience"]).cookingTime(newrecipe["cookingtime"]);

  });
});
