// Basato su KubeJS EnderIO: https://www.curseforge.com/minecraft/mc-mods/kubejs-enderio
// Recipes Docs: https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
// (tecnicamente è la documentazione vecchia ma perchè quella nuova non è ancora uscita)

ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "immersiveengineering:alloy" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("oritech:compat/")
    ) {
      let newrecipe = JSON.parse(recipe.json);
      let output = immersiveOutputHelper(newrecipe);
      let inputs = immersiveInputHelper(newrecipe);
      let result = "item" in output
          ? getItemOutput(output["item"]).id
          : getTagOutput(output["tag"]).id

      event.recipes.enderio.alloy_smelting(
        //output
        Item.of(result).withCount(output["count"]),
        //input
        [
          Ingredient.of(
            "item" in inputs[0] ? inputs[0]["item"] : "#" + inputs[0]["tag"],
            inputs[0]["count"]
          ),
          Ingredient.of(
            "item" in inputs[1] ? inputs[1]["item"] : "#" + inputs[1]["tag"],
            inputs[1]["count"]
          ),
        ]
      ).energy(2560);
    } 
  });
});
