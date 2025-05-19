// priority: 9999999

ServerEvents.tags('item', event => {
  event.add('c:plates/plastic', 'pneumaticcraft:plastic')
  event.add('c:plastics', 'pneumaticcraft:plastic')
})

ServerEvents.tags('fluid', event => {
  event.add('c:crude_oil', 'oritech:still_oil')
  event.add('c:fuels/crude_oil', 'oritech:still_oil')
})