// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.removeAll("c:coal");
  
  Ingredient.of("#minecraft:coals").itemIds.forEach((id) => {
    if (
      !(getTagsById(String(id)).some((item) => item == "c:charcoal")) 
      &&
      !(getTagsById(String(id)).some((item) => item == "c:coal_coke")) 
    ){
      event.add("c:coal", String(id));
    }
  });
});

// ServerEvents.tags('slurry', event => {
//   event.add('c:hidden_from_recipe_viewers', "moremekanismprocessing:clean_ruby")

// })
