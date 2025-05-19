// priority: 9999998
ServerEvents.recipes((event) => {
  const noOresToIngot = [];

  getAtoB("c:ores", "c:ingots").forEach((entry) => {
    if (!noOresToIngot.includes(`${entry["input"]}`.split("/")[1])) {
      event
        .smelting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
      event
        .blasting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
    }
  });

  const noOresToGem = [];

  getAtoB("c:ores", "c:gems").forEach((entry) => {
    if (!noOresToGem.includes(`${entry["input"]}`.split("/")[1])) {
      event
        .smelting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
      event
        .blasting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
    }
  });

  const noDustsToIngot = [];

  getAtoB("c:dusts", "c:ingots").forEach((entry) => {
    if (!noDustsToIngot.includes(`${entry["input"]}`.split("/")[1])) {
      event
        .smelting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
      event
        .blasting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
    }
  });

  const noDustsToGem = [];

  getAtoB("c:dusts", "c:gems").forEach((entry) => {
    if (!noDustsToGem.includes(`${entry["input"]}`.split("/")[1])) {
      event
        .smelting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
      event
        .blasting(
          getTagOutput(entry["output"]).withCount(1),
          `#${entry["input"]}`
        )
        .xp(1);
    }
  });

  const notRawsStoragesToIngot = [];

  getUnifiedSubTags("c:storage_blocks")
    .filter(
      (entry) =>
        entry.includes("/raw_") &&
        getUnifiedSubTags("c:ingots").some((dust) =>
          dust.includes(String(entry).split("raw_")[1])
        )
    )
    .forEach((entry) => {
      if (!notRawsStoragesToIngot.includes(`${entry}`.split("raw_")[1])) {
        event
          .smelting(
            getTagOutput(
              `c:ingots/${String(entry).split("raw_")[1]}`
            ).withCount(9),
            `#${entry}`
          )
          .xp(1);
        event
          .blasting(
            getTagOutput(
              `c:ingots/${String(entry).split("raw_")[1]}`
            ).withCount(9),
            `#${entry}`
          )
          .xp(1);
      }
    });
});