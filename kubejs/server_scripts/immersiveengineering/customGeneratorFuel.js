// priority: 9999998

let ieGeneratorFuels = [
  { burningTime: 250, fluidTag: "c:fuels/biodiesel" },
  { burningTime: 250, fluidTag: "c:fuels/biofuel" },
  { burningTime: 250, fluidTag: "c:fuels/diesel" },
  { burningTime: 20, fluidTag: "c:fuels/creosote" },
  { burningTime: 20, fluidTag: "c:fuels/curde_oil" },
  { burningTime: 20, fluidTag: "c:fuels/ethanol" },
  { burningTime: 20, fluidTag: "c:fuels/bioethanol" },
  { burningTime: 230, fluidTag: "c:fuels/gasoline" },
  { burningTime: 200, fluidTag: "c:fuels/lpg" },
  { burningTime: 100, fluidTag: "c:fuels/kerosene" },
  { burningTime: 275, fluidTag: "c:fuels/high_power_biodiesel" },
];

ServerEvents.recipes((event) => {
  ieGeneratorFuels.forEach((fuel) => {
    event.custom({
      type: "immersiveengineering:generator_fuel",
      burnTime: fuel["burningTime"],
      fluidTag: fuel["fluidTag"],
    });
  });

  event.forEachRecipe(
    { type: "immersiveengineering:generator_fuel" },
    (recipe) => {
      if (!recipe.getId().includes("kjs:")) {
        console.log(`${recipe.getId()} removed from diesel generator recipes.`);
        event.remove({ id: recipe.getId() });
      } else {
        ieGeneratorFuels.push({
          burningTime: recipe["burnTime"],
          fluidTag: recipe["fluidTag"],
        });
      }
    }
  );
});

RecipeViewerEvents.addInformation("fluid", (event) => {
  ieGeneratorFuels.forEach((fuel) => {
    event.add(`#${fuel["fluidTag"]}`, [
      "Immersive Engineering",
      "Diesel Generator: ",
      `Produce 4096FE/t for ${fuel["burningTime"] / 20}s (${
        (4096 * fuel["burningTime"]) / 1000
      }kFE/1B)`,
    ]);
  });
});
