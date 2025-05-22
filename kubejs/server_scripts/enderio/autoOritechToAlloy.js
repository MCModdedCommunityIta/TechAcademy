// priority: 9999998
ServerEvents.recipes((event) => {
  const exclude = [
    "adamant",
    "energite",
    "biosteel",
    "electrum",
    "steel",
    "duratium",
  ];

  event.forEachRecipe({ type: "oritech:foundry" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("/inverse/") &&
      !recipe.getId().includes("/gem/") &&
      !recipe.getId().includes("compat/")
    ) {
      let originalRecipe = JSON.parse(recipe.json);
      let output = originalRecipe["results"][0];
      if (!exclude.some((e) => output["id"].includes(e))) {
        let inputs = originalRecipe["ingredients"];
        let target = AlmostUnified.getVariantItemTarget(
          Item.of(output["id"])
        ).id;
        target = target.includes("minecraft:air") ? output["id"] : target;

        event.recipes.enderio.alloy_smelting(
          //output
          Item.of(target).withCount(output["count"]),
          //input
          [
            Ingredient.of(
              "item" in inputs[0] ? inputs[0]["item"] : `#${inputs[0]["tag"]}`,
              1
            ),
            Ingredient.of(
              "item" in inputs[1] ? inputs[1]["item"] : `#${inputs[1]["tag"]}`,
              1
            ),
          ]
        );
      }
    } 
  });
});
