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
        // raws2dust
        let targetItem = AlmostUnified.getTagTargetItem(`c:dusts/${material}`);

        event.custom({
          type: "actuallyadditions:crushing",
          ingredient: {
            tag: `c:raw_materials/${material}`,
          },
          result: [
            {
              result: {
                count: 1,
                id: !targetItem.id.includes("air") ? targetItem.id : Ingredient.of(`c:dusts/${material}`).itemIds[0],
              },
            },
            {
              chance: 0.2,
              result: {
                count: 1,
                id: !targetItem.id.includes("air") ? targetItem.id : Ingredient.of(`c:dusts/${material}`).itemIds[0],
              },
            },
          ],
        });
      }

      if (allTag.some(t => t.includes(`c:ores/${material}`)) && !noMaterials.includes(material)) {
        // ore2raws
        let targetItem = AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`);
        event.custom({
          type: "actuallyadditions:crushing",
          ingredient: {
            tag: `c:ores/${material}`,
          },
          result: [
            {
              result: {
                count: 2,
                id: !targetItem.id.includes("air") ? targetItem.id : Ingredient.of(`#c:raw_materials/${material}`).itemIds[0],
              },
            },
            {
              result: {},
            },
          ],
        });
      }

      } 
      
  });





})