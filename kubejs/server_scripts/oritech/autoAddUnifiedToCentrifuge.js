// priority: 9999998

ServerEvents.recipes((event) => {
  const noRawsToClump = [
    "copper",
    "gold",
    "iron",
    "nickel",
    "platinum",
    "uranium",
  ];

  getUnifiedSubTags("c:clumps").forEach((entry) => {
    let material = `${entry}`.split("/")[1];
    if (
      !noRawsToClump.includes(material) &&
      itemExists(`oritech:${material}_gem`)
    ) {
      addCentrifuge(event, {
        itemsInput: [
          {
            tag: entry,
          },
        ],
        itemsOutput: [
          {
            id: `oritech:${material}_gem`,
            count: 1,
          },
        ],
      });
      addCentrifuge(event, {
        processTime: 300,
        itemsInput: [
          {
            tag: entry,
          },
        ],
        fluidInput: { fluid: "minecraft:water", amount: 1000 },
        itemsOutput: [
          {
            id: `oritech:${material}_gem`,
            count: 2,
          },
        ],
      });
    }
  });
});
