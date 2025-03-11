// Basato su KubeJS EnderIO: https://www.curseforge.com/minecraft/mc-mods/kubejs-enderio
// Recipes Docs: https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
// (tecnicamente è la documentazione vecchia ma perchè quella nuova non è ancora uscita)

// SagMillOutput (elemento di output per il SagMill) è attualmente senza documentazione,
// il suo utulizzo è esplicato qui:
// https://github.com/AlmostReliable/kubejs-enderio/issues/12#issuecomment-2674632329


ServerEvents.recipes((event) => {

  const allTag = AlmostUnified.getTags();

  // copper, gold e iron sono gia presenti
  const noMaterials = [
    `copper`,
    `gold`,
    `iron`
  ];

  allTag.forEach((tag) => {

    if (tag.includes("c:raw_materials")) {
      let material = tag.split("/")[1]

      if (allTag.some(t => t.includes(`c:dusts/${material}`)) && !noMaterials.includes(material)) {
        let targetItem = AlmostUnified.getTagTargetItem(`c:dusts/${material}`);

        event.recipes.enderio.sag_milling(
          //outputs
          [
            SagMillOutput.of(!targetItem.id.includes("air") ? targetItem.withCount(1) : `1x ${Ingredient.of(`#c:dusts/${material}`).itemIds[0]}`),
            SagMillOutput.of(!targetItem.id.includes("air") ? targetItem.withCount(1) : `1x ${Ingredient.of(`#c:dusts/${material}`).itemIds[0]}`, 0.25),
          ],
          //input
          Ingredient.of(`#c:raw_materials/${material}`,1)
        ).energy(2400);
      }

      if (allTag.some(t => t.includes(`c:ores/${material}`)) && !noMaterials.includes(material)) {
        let targetItem = AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`);

        event.recipes.enderio.sag_milling(
          //outputs
          [
            SagMillOutput.of(!targetItem.id.includes("air") ? targetItem.withCount(1) : `1x ${Ingredient.of(`#c:raw_materials/${material}`).itemIds[0]}`),
            SagMillOutput.of(!targetItem.id.includes("air") ? targetItem.withCount(1) : `1x ${Ingredient.of(`#c:raw_materials/${material}`).itemIds[0]}`, 0.33),
            SagMillOutput.of(`minecraft:cobblestone`, 0.15)
          ],
          //input
          Ingredient.of(`#c:ores/${material}`,1)
        ).energy(2400);
      }

    }
  });













  // copper, gold e iron sono gia presenti
  // const materials = [
  //   `aluminum`,
  //   // `copper`,
  //   // `gold`,
  //   // `iron`,
  //   `lead`,
  //   `nickel`,
  //   `osmium`,
  //   `silver`,
  //   `tin`,
  //   `uranium`,
  //   `zinc`,
  // ];

  

  // materials.forEach((material) => {

    
  //   //raws
  //   event.recipes.enderio.sag_milling(
  //     //outputs
  //     [
  //       SagMillOutput.ofTag(`c:dusts/${material}`, 1),
  //       SagMillOutput.ofTag(`c:dusts/${material}`, 1, 0.25),
  //     ],
  //     //input
  //     Ingredient.of(`#c:raw_materials/${material}`,1)
  //   ).energy(2400);

  //   //ores  
  //   event.recipes.enderio.sag_milling(
  //     //outputs
  //     [
  //       SagMillOutput.ofTag(`c:raw_materials/${material}`, 1),
  //       SagMillOutput.ofTag(`c:raw_materials/${material}`, 1, 0.33),
  //       SagMillOutput.of(`minecraft:cobblestone`, 0.15)
  //     ],
  //     //input
  //     Ingredient.of(`#c:ores/${material}`,1)
  //   ).energy(2400);
  // });

  // event.recipes.enderio.sag_milling(
  //   //outputs
  //   [
  //     SagMillOutput.ofTag(`c:raw_materials/uraninite`, 1),
  //     SagMillOutput.ofTag(`c:raw_materials/uraninite`, 1, 0.33),
  //     SagMillOutput.of(`minecraft:cobblestone`, 0.15)
  //   ],
  //   //input
  //   Ingredient.of(`#c:ores/uraninite`,1)
  // ).energy(2400);



});
