// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.add("c:pellets/plutonium", "oritech:plutonium_pellet");
  event.add("c:plastics", "oritech:plastic_sheet");

  let materials = ["nickel", "platinum", "iron", "copper", "gold"];

  materials.forEach((material) => {
    event.add(`c:clumps/${material}`, `oritech:${material}_clump`);
  });
});
