const missingOritechMaterials = [
  { "material": "Zinc", "color": "#a7d1ae" },
  { "material": "Aluminum", "color": "#879394" },
  { "material": "Lead", "color": "#424047" },
  { "material": "Silver", "color": "#879799" },
  { "material": "Osmium", "color": "#98a3b8" },
  { "material": "Tin", "color": "#e8e2cf" }
];


global.missingOritechMaterials = missingOritechMaterials.map(
  (material) => material["material"].toLowerCase()
);

StartupEvents.registry("item", (event) => {
  missingOritechMaterials.forEach((material) => {
    event
      .create(`oritech:small_${material["material"].toLowerCase()}_dust`)
      .displayName(`Small ${material["material"]} Dust`)
      .texture("oritech:item/small_dust")
      .color(0, material["color"]);
    event
      .create(`oritech:small_${material["material"].toLowerCase()}_clump`)
      .displayName(`Small ${material["material"]} Clump`)
      .texture("oritech:item/small_clump")
      .color(0, material["color"]);
    // event
    //   .create(`oritech:${material["material"].toLowerCase()}_clump`)
    //   .displayName(`${material["material"]} Clump`)
    //   .texture("oritech:item/clump")
    //   .color(0, material["color"]);
    event
      .create(`oritech:${material["material"].toLowerCase()}_gem`)
      .displayName(`${material["material"]} Gem`)
      .texture("oritech:item/gem")
      .color(0, material["color"]);
  });
});
