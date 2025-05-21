const mekaweapons_dir = "mekaweapons:recipe/";
//it *should* work but wasn't tested yet
ServerEvents.generateData("after_mods", (event) => {
  event.json(mekaweapons_dir + "module_arrowvelocity_unit", {
    "neoforge:conditions": [
      {
        type: "neoforge:item_exists",
        item: "mekaweapons:module_arrowvelocity_unit",
      },
    ],
    type: "minecraft:crafting_shaped",
    result: {
      id: "mekaweapons:module_arrowvelocity_unit",
    },
    pattern: ["sbs", "ama", "ppp"],
    key: {
      m: { item: "mekanism:module_base" },
      p: { item: "mekanism:pellet_polonium" },
      b: { item: "minecraft:arrow" },
      a: { item: "mekanism:alloy_reinforced" },
      s: { item: "mekanism:upgrade_speed" },
    },
  });
});
