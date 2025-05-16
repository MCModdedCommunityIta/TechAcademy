// Basato su KubeJS EnderIO: https://www.curseforge.com/minecraft/mc-mods/kubejs-enderio
// Recipes Docs: https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
// (tecnicamente è la documentazione vecchia ma perchè quella nuova non è ancora uscita)

ServerEvents.recipes((event) => {
  // event.remove({ id: "enderio:tank_empty/glass_bottle"})
  // event.remove({ id: "enderio:tank_fill/experience_bottle"})


  event.recipes.enderio.tank(
    Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]'),
    Ingredient.of("minecraft:glass_bottle"),
    Fluid.of("minecraft:water", 250)
  );
  
  event.recipes.enderio.tank(
    Item.of("minecraft:glass_bottle"),
    Ingredient.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]'),
    Fluid.of("minecraft:water", 250)
  ).emptying();
  
  event.recipes.enderio.tank(
    Item.of("immersiveengineering:treated_wood_horizontal"),
    Ingredient.of("#minecraft:planks"),
    Fluid.of("immersiveengineering:creosote", 125)
  );

  event.recipes.enderio.tank(
    Item.of("immersiveengineering:stick_treated"),
    Ingredient.of("#c:rods/wooden"),
    Fluid.of("immersiveengineering:creosote", 63)
  );

  const xpFluids = [
    "industrialforegoing:essence",
    "pneumaticcraft:memory_essence",
    "sophisticatedcore:xp_still",
    "mob_grinding_utils:fluid_xp",
  ];

  xpFluids.forEach((xp) => {
    event.recipes.enderio.tank(
      Item.of("minecraft:experience_bottle"),
      Ingredient.of("minecraft:glass_bottle"),
      Fluid.of(`${xp}`, 250)
    );
  });
});
