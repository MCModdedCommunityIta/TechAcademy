ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "enderio:alloy_smelting" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("oritech:compat/")
    ) {
      let inputHelper = () => {
        return newrecipe["inputs"];
      };

      let resultHelper = () => {
        return newrecipe["output"];
      };

      let newrecipe = JSON.parse(recipe.json);

      let result = resultHelper();
      let inputs = inputHelper();

      let finalrecipe = {
        type: "create:mixing",
        ingredients: [],
        results: [],
      };

      if ("neoforge:conditions" in newrecipe) {
        finalrecipe["neoforge:conditions"] = newrecipe["neoforge:conditions"];
      }

      finalrecipe["heat_requirement"] =
        newrecipe["energy"] > 4000 ? "superheated" : "heated";

      inputs.forEach((input) => {
        for (let i = 0; i < input["count"]; i++) {
          finalrecipe["ingredients"].push(
            "tag" in input
              ? { tag: input["tag"] }
              : "children" in input && "type" in input
              ? { type: input["type"], children: input["children"] }
              : { item: input["item"] }
          );
        }
      });

      finalrecipe["results"].push({
        count: result["count"],
        item: {
          id:
            "id" in result
              ? getItemOutput(result["id"]).id
              : getTagOutput(result["tag"]).id,
        },
      });

      // esclusione brass gia presente
      event.custom(finalrecipe);
    }
  });
});
