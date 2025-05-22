// priority: 9999998
ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "immersiveengineering:alloy" }, (recipe) => {
    if (!recipe.getId().includes("kjs:") && !recipe.getId().includes("oritech:compat/")) {
      let originalRecipe = JSON.parse(recipe.json);
      let output = immersiveOutputHelper(originalRecipe);
      let inputs = immersiveInputHelper(originalRecipe);
      let targetItem =
        "tag" in output
          ? getTagOutput(output["tag"])
          : getItemOutput(output["item"])

      let basePreparation = {
        itemsInput: [],
        itemsOutput: [
          {
            id: targetItem.id,
            count: output["count"],
          },
        ],
      };

      inputs.forEach((input) => {
        for (let i = 0; i < input["count"]; i++) {
          if ("item" in input) {
            basePreparation["itemsInput"].push({
              item: input["item"],
            });
          } else {
            basePreparation["itemsInput"].push({
              tag: input["tag"],
            });
          }
        }
      });

      addAssembler(event, basePreparation);
    }
  });
});
