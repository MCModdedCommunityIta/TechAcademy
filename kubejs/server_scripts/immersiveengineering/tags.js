// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.add("c:plastics", "immersiveengineering:plate_duroplast");

  getIdsByTagPre(event, "c:rods/treated_wood").forEach((id) => {
      event.remove("c:rods/wooden", String(id));
    });
});
