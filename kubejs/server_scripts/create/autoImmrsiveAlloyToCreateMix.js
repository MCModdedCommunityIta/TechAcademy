ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "immersiveengineering:alloy" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("oritech:compat/")
    ) {
      let inputHelper = () => {
        const inputs = ["input0", "input1"];
        let inpsRes = [];
        inputs.forEach((input) => {
          let inpRes = {
            count: "count" in newrecipe[input] ? newrecipe[input]["count"] : 1,
          };
          if (
            "basePredicate" in newrecipe[input] &&
            "tag" in newrecipe[input]["basePredicate"]
          ) {
            inpRes["tag"] = newrecipe[input]["basePredicate"]["tag"];
          } else if ("tag" in newrecipe[input]) {
            inpRes["tag"] = newrecipe[input]["tag"];
          } else if ("item" in newrecipe[input]) {
            inpRes["item"] = newrecipe[input]["item"];
          }
          inpsRes.push(inpRes);
        });
        return inpsRes;
      };

      let resultHelper = () => {
        let resRes = {
          count:
            "count" in newrecipe["result"] ? newrecipe["result"]["count"] : 1,
        };
        if (
          "basePredicate" in newrecipe["result"] &&
          "tag" in newrecipe["result"]["basePredicate"]
        ) {
          resRes["tag"] = newrecipe["result"]["basePredicate"]["tag"];
        } else if ("tag" in newrecipe["result"]) {
          resRes["tag"] = newrecipe["result"]["tag"];
        } else if ("id" in newrecipe["result"]) {
          resRes["item"] = newrecipe["result"]["id"];
        }
        return resRes;
      };

      let newrecipe = JSON.parse(recipe.json);

      let result = resultHelper();
      let inputs = inputHelper();

      let finalrecipe = {
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [],
        results: [],
      };

      if ("neoforge:conditions" in newrecipe) {
        finalrecipe["neoforge:conditions"] = newrecipe["neoforge:conditions"];
      }

      inputs.forEach((input) => {
        for (let i = 0; i < input["count"]; i++) {
          finalrecipe["ingredients"].push(
            "tag" in input ? { tag: input["tag"] } : { item: input["item"] }
          );
        }
      });

      finalrecipe["results"].push({
        count: result["count"],
        item: {
          id:
            "item" in result
              ? result["item"]
              : AlmostUnified.getTagTargetItem(result["tag"]).id,
        },
      });

      // esclusione brass gia presente
      if (finalrecipe["results"][0]["item"]["id"].includes("brass") !== true) {
        event.custom(finalrecipe);
      }
    }
  });
});
