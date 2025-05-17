// priority: 9999998
ServerEvents.recipes((event) => {
  const noRawsToClump = [
    `copper`,
    `gold`,
    `iron`,
    "nickel",
    "platinum",
    "uranium",
  ];

  getAtoB("c:raw_materials", "c:clumps").forEach((entry) => {
    if (!noRawsToClump.includes(`${entry["input"]}`.split("/")[1])) {
      let material = `${entry["output"]}`.split("/")[1];
      addFragmentForge(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: getTagOutput(entry["output"]).id,
            count: 1,
          },
          itemExists(`oritech:small_${material}_clump`)
            ? {
                id: `oritech:small_${material}_clump`,
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
      addFragmentForge(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: getTagOutput(entry["output"]).id,
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
      addFragmentForge(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: getTagOutput(entry["output"]).id,
            count: 2,
          },
        ],
      });
    }
  });

  const noOresToGem = ["diamond", "lapis", "quartz"];

  getAtoB("c:ores", "c:gems").forEach((entry) => {
    if (!noOresToGem.includes(`${entry["input"]}`.split("/")[1])) {
      addFragmentForge(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: getTagOutput(entry["output"]).id,
            count: 1,
          },
        ],
      });
    }
  });

  const noGemToDust = ["lapis", "quartz", "prismarine"];

  getAtoB("c:gems", "c:dusts").forEach((entry) => {
    if (!noGemToDust.includes(`${entry["input"]}`.split("/")[1])) {
      addFragmentForge(event, {
        itemsInput: [
          {
            tag: entry["input"],
          },
        ],
        itemsOutput: [
          {
            id: getTagOutput(entry["output"]).id,
            count: 1,
          },
        ],
      });
    }
  });

  // Custom

  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:storage_blocks/amethyst",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:gems/amethyst").id,
        count: 4,
      },
    ],
  });
  event.remove("oritech:grinder/dust/coal")
  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:coal/coal",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/coal").id,
        count: 1,
      },
      {
        id: getTagOutput("c:dusts/sulfur").id,
        count: 1,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:coal/charcoal",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/charcoal").id,
        count: 1,
      },
      {
        id: getTagOutput("c:dusts/sulfur").id,
        count: 1,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:coal/coal_coke",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/coal_coke").id,
        count: 1,
      },
      {
        id: getTagOutput("c:dusts/sulfur").id,
        count: 1,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:netherracks",
      },
    ],
    itemsOutput: [
      {
        id: "create:cinder_flour",
        count: 1,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        tag: "c:crops/wheat",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/flour").id,
        count: 1,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        item: "minecraft:dark_prismarine",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/prismarine").id,
        count: 8,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine_bricks",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/prismarine").id,
        count: 9,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:dusts/prismarine").id,
        count: 4,
      },
    ],
  });
  addFragmentForge(event, {
    itemsInput: [
      {
        item: "minecraft:prismarine_shard",
      },
    ],
    itemsOutput: [
      {
        id: getTagOutput("c:gems/prismarine").id,
        count: 2,
      },
    ],
  });
});
