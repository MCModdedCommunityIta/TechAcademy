// priority: 9999998
ServerEvents.recipes((event) => {


  event.forEachRecipe({ type: 'immersiveengineering:alloy' }, recipe => {
    if (!recipe.getId().includes("kjs")) {
      let originalRecipe = JSON.parse(recipe.json);
      let output = immersiveOutputHelper(originalRecipe)
      let inputs = immersiveInputHelper(originalRecipe)
      let targetItem = "tag" in output ? AlmostUnified.getTagTargetItem(output["tag"]) : AlmostUnified.getVariantItemTarget(output["item"])
      
      let basePreparation = {
          itemsInput: [],
          itemsOutput: [{
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : "tag" in output ? Ingredient.of(output["tag"]).itemIds[0] : Ingredient.of(output["item"]).itemIds[0],
            count: output["count"],
          }],
        }

        inputs.forEach((input) => {
          for (let i = 0; i < input["count"]; i++) {
            if ("item" in input){
              basePreparation["itemsInput"].push({
                "item": input["item"],
              });
            } else {
              basePreparation["itemsInput"].push({
                "tag": input["tag"],
              });

            }
          }
        })
      
        addAssembler(event, basePreparation);

      
    }
  })
  
});
