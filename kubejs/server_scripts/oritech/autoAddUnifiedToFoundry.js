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
        let targetItem = AlmostUnified.getTagTargetItem(`c:ingots/${material}`);
        addFoundry(event, {
          itemsInput: [
            {
              "item": `oritech:${material}_gem`,
            },
            {
              "item": `oritech:${material}_gem`,
            }
          ],
          itemsOutput: [{
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(`c:ingots/${material}`).itemIds[0],
            count: 3,
          }],
        });
      }
    });
});
