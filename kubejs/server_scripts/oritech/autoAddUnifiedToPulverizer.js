// priority: 9999998
ServerEvents.recipes((event) => {
  const noRawsToDust = [
    `copper`,
    `gold`,
    `iron`,
    "nickel",
    "platinum",
    "uranium",
  ];

  getAtoB("c:raw_materials", "c:dusts").forEach((entry) => {
    if (!noRawsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      let targetItem = AlmostUnified.getTagTargetItem(entry["output"]);
      let material = `${entry["output"]}`.split("/")[1];
      addPulverizer(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(entry["output"]).itemIds[0],
            count: 1,
          },
          itemExists(`oritech:small_${material}_dust`)
            ? {
                id: `oritech:small_${material}_dust`,
                count: 3,
              }
            : {},
        ],
      });
    }
  });

  const noIngotsToDust = [
    `copper`,
    `gold`,
    `iron`,
    "nickel",
    "platinum",
    "steel",
    "electrum",
    "energite",
    "duratium",
    "adamant",
  ];

  getAtoB("c:ingots", "c:dusts").forEach((entry) => {
    if (!noIngotsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      let targetItem = AlmostUnified.getTagTargetItem(entry["output"]);
      addPulverizer(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(entry["output"]).itemIds[0],
            count: 1,
          },
        ],
      });
    }
  });

  const noOresToRaw = [
    `copper`,
    `gold`,
    `iron`,
    "nickel",
    "platinum",
    "uranium",
  ];

  getAtoB("c:ores", "c:raw_materials").forEach((entry) => {
    if (!noOresToRaw.includes(`${entry["input"]}`.split("/")[1])) {
      let targetItem = AlmostUnified.getTagTargetItem(entry["output"]);
      addPulverizer(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(entry["output"]).itemIds[0],
            count: 2,
          },
        ],
      });
    }
  });

  const noOresToGem = ["diamond", "lapis", "quartz"];

  getAtoB("c:ores", "c:gems").forEach((entry) => {
    if (!noOresToGem.includes(`${entry["input"]}`.split("/")[1])) {
      let targetItem = AlmostUnified.getTagTargetItem(entry["output"]);
      addPulverizer(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(entry["output"]).itemIds[0],
            count: 1,
          },
        ],
      });
    }
  });

  const noGemToDust = ["lapis", "quartz", "prismarine"];

  getAtoB("c:gems", "c:dusts").forEach((entry) => {
    if (!noGemToDust.includes(`${entry["input"]}`.split("/")[1])) {
      let targetItem = AlmostUnified.getTagTargetItem(entry["output"]);
      addPulverizer(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: !targetItem.id.includes("air")
              ? targetItem.id
              : Ingredient.of(entry["output"]).itemIds[0],
            count: 1,
          },
        ],
      });
    }
  });

  // Custom

  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:storage_blocks/amethyst",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:gems/amethyst").id,
        count: 4,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:ingots/refined_glowstone",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/glowstone").id,
        count: 1,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:ender_pearls",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/ender_pearl").id,
        count: 1,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:charcoal",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/charcoal").id,
        count: 1,
      },
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/sulfur").id,
        count: 1,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:coal_coke",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/coal_coke").id,
        count: 1,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        tag: "c:crops/wheat",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/flour").id,
        count: 1,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        item: "minecraft:dark_prismarine",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/prismarine").id,
        count: 8,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine_bricks",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/prismarine").id,
        count: 9,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:dusts/prismarine").id,
        count: 4,
      },
    ],
  });
  addPulverizer(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine_shard",
      },
    ],
    itemsOutput: [
      {
        id: AlmostUnified.getTagTargetItem("c:gems/prismarine").id,
        count: 2,
      },
    ],
  });
});
