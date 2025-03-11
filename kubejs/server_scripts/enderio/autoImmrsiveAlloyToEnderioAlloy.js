// Basato su KubeJS EnderIO: https://www.curseforge.com/minecraft/mc-mods/kubejs-enderio
// Recipes Docs: https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
// (tecnicamente è la documentazione vecchia ma perchè quella nuova non è ancora uscita)

ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'immersiveengineering:alloy' }, recipe => {

    let inputHelper = () => {
      const inputs= ["input0", "input1"]
      let inpsRes = []
      inputs.forEach(input => {
        let inpRes = {"count": "count" in newrecipe[input] ? newrecipe[input]["count"] : 1};
          if ("basePredicate" in newrecipe[input] && "tag" in newrecipe[input]["basePredicate"]) {
            inpRes["tag"] = newrecipe[input]["basePredicate"]["tag"] 
          } else if ("tag" in newrecipe[input]) {
            inpRes["tag"] = newrecipe[input]["tag"] 
          } else if ("item" in newrecipe[input]) {
            inpRes["item"] = newrecipe[input]["item"] 
          }
        inpsRes.push(inpRes)
      });
      return inpsRes
    }

    let resultHelper = () => {
      let resRes= { "count": "count" in newrecipe["result"] ? newrecipe["result"]["count"] : 1 }
      if ("basePredicate" in newrecipe["result"] && "tag" in newrecipe["result"]["basePredicate"]) {
        resRes["tag"] = newrecipe["result"]["basePredicate"]["tag"]
      } else if ("tag" in newrecipe["result"]) {
        resRes["tag"] = newrecipe["result"]["tag"]
      } else if ("id" in newrecipe["result"]) {
        resRes["item"] = newrecipe["result"]["id"]
      }
      return resRes
    }

    let newrecipe = JSON.parse(recipe.json)
    let result=resultHelper()
    let inputs=inputHelper()
    
    event.recipes.enderio.alloy_smelting(
      //output
      "item" in result ? Item.of(result["item"], result["count"]) : AlmostUnified.getTagTargetItem(result["tag"]).withCount(result["count"]),
      //input
      [
        Ingredient.of("item" in inputs[0] ? inputs[0]["item"] : "#"+inputs[0]["tag"], inputs[0]["count"]),
        Ingredient.of("item" in inputs[1] ? inputs[1]["item"] : "#"+inputs[1]["tag"], inputs[1]["count"]),
      ]
    )

    
  });
});

