// priority: 9999998
ServerEvents.recipes((event) => {
  const noGemToIngot = [
    "copper",
    "gold",
    "iron",
    "nickel",
    "platinum",
    "uranium",
  ];

  Ingredient.of("@oritech")
    .itemIds.filter((id) => id.includes("_gem"))
    .forEach((id) => {
      let material = id.split("_")[0].split(":")[1];
      if (!noGemToIngot.includes(material)) {
        let targetItem = AlmostUnified.getTagTargetItem(`c:dusts/${material}`);
        addAtomicForge(event, {
          itemsInput: [
            {
              item: `oritech:${material}_gem`,
            },
            {
              "item": "oritech:fluxite"
            },
            {
              "item": "oritech:fluxite"
            }
          ],
          itemsOutput: [{
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(`c:dusts/${material}`).itemIds[0],
            count: 2,
          }],
        });
      }
    });
});
