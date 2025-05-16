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
        addFoundry(event, {
          itemsInput: [
            {
              item: `oritech:${material}_gem`,
            },
            {
              item: `oritech:${material}_gem`,
            },
          ],
          itemsOutput: [
            {
              id: getTagOutput(`c:ingots/${material}`).id,
              count: 3,
            },
          ],
        });
      }
    });
});
