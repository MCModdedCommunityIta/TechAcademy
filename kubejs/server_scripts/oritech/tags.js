// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.add("c:pellets/plutonium", "oritech:plutonium_pellet");
  event.add("c:plastics", "oritech:plastic_sheet");
  event.add("c:wires/nickel", "oritech:insulated_wire");
  event.add("c:ores", "/oritech:.*_ore/g");

  let materials = ["nickel", "platinum", "iron", "copper", "gold"];

  materials.forEach((material) => {
    event.add(`c:clumps/${material}`, `oritech:${material}_clump`);
  });
});


ServerEvents.tags("fluid", (event) => {
  event.add("c:still_fuel", "oritech:still_fuel");
});