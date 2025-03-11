ServerEvents.recipes(event => {
  // event.remove({id: "immersiveengineering:alloysmelter/bronze"})
  event.replaceOutput({ output: '#c:ingots/bronze' }, '#c:ingots/bronze', AlmostUnified.getTagTargetItem("c:ingots/bronze").id);
  // event.custom({
  //   "neoforge:conditions": [
  //     {
  //       "type": "neoforge:not",
  //       "value": {
  //         "type": "neoforge:tag_empty",
  //         "tag": "c:ingots/bronze"
  //       }
  //     },
  //     {
  //       "type": "neoforge:not",
  //       "value": {
  //         "type": "neoforge:tag_empty",
  //         "tag": "c:ingots/tin"
  //       }
  //     }
  //   ],
  //   "type": "immersiveengineering:alloy",
  //   "input0": {
  //     "basePredicate": {
  //       "tag": "c:ingots/copper"
  //     },
  //     "count": 3
  //   },
  //   "input1": {
  //     "tag": "c:ingots/tin"
  //   },
  //   "result": {
  //     "id": AlmostUnified.getTagTargetItem("c:ingots/bronze").id,
  //     "count": 4
  //   }
  // }).id("immersiveengineering:alloysmelter/bronze")
})