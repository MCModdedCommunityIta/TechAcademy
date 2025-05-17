// priority: 9999999

ServerEvents.tags("item", (event) => {
  let charcoalIds = getIdsByTagPre(event, "c:charcoal")
  let cokeIds = getIdsByTagPre(event, "c:coal_coke")

  getIdsByTagPre(event, "c:coal").forEach((id) => {
    if (charcoalIds.some((item) => item == id)) {
      event.add("c:coal/charcoal", String(id));
    } else if (cokeIds.some((item) => item == id)) {
      event.add("c:coal/coal_coke", String(id));
    } else {
      event.add("c:coal/coal", String(id));
    }
  });
});
