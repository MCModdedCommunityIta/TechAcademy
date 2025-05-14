const itemsToRemove_mmp = [];


const materialToRemove_mmp = [
  "apatite",
  "azure_silver",
  "bismuth",
  "bort",
  "cinnabar",
  "cobalt",
  "crimson_iron",
  "desh",
  "dilithium",
  "draconium",
  "electrotine",
  "green_sapphire",
  "iridium",
  "lithium",
  "niter",
  "peridot",
  "ruby",
  "sapphire",
  "ostrum",
  "calorite",
  "titanium",
  "tungsten"
];




ServerEvents.recipes((event) => { 
  let outputs = [];
  materialToRemove_mmp.forEach((mmp) => {
    outputs.push({"output": `moremekanismprocessing:crystal_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:shard_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:clump_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:dirty_dust_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:dust_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:${mmp}_ingot`});
    outputs.push({"output": `moremekanismprocessing:${mmp}_nugget`});
    outputs.push({"output": `moremekanismprocessing:gem_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:clean_${mmp}`});
    outputs.push({"output": `moremekanismprocessing:dirty_${mmp}`});
  })
  outputs.forEach((output) => {
    try {
      event.remove(output);
    } catch (error) {
      
    }
  })
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  let outputs = [];
  materialToRemove_mmp.forEach((mmp) => {
    outputs.push(`moremekanismprocessing:crystal_${mmp}`);
    outputs.push(`moremekanismprocessing:shard_${mmp}`);
    outputs.push(`moremekanismprocessing:clump_${mmp}`);
    outputs.push(`moremekanismprocessing:dirty_dust_${mmp}`);
    outputs.push(`moremekanismprocessing:dust_${mmp}`);
    outputs.push(`moremekanismprocessing:${mmp}_ingot`);
    outputs.push(`moremekanismprocessing:${mmp}_nugget`);
    outputs.push(`moremekanismprocessing:gem_${mmp}`);
  })
  outputs.forEach((output) => {
    try {
      event.remove(output);
    } catch (error) {
      
    }
  })
})

// RecipeViewerEvents.removeEntriesCompletely('gas', event => {
//   let outputs = [];
//   materialToRemove_mmp.forEach((mmp) => {
//     outputs.push(`moremekanismprocessing:clean_${mmp}`);
//     outputs.push(`moremekanismprocessing:dirty_${mmp}`);
//   })
//   outputs.forEach((output) => {
//     try {
//       event.remove(output);
//     } catch (error) {
      
//     }
//   })
// })



