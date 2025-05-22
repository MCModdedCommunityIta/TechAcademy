ServerEvents.tags('item', event => {
  // completamento assegnamento tag parziale della ori sulla create

  getIdsByTagPre(event, "create:crushed_raw_materials").forEach((id) => {
    let material = String(id).split('_').pop()
    event.add(`c:clumps/${material}`, String(id))
    });

})