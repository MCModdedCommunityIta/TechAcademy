const itemsToRemove_Utilitarian = [
  "utilitarian:snad",
  "utilitarian:red_snad",
  "utilitarian:soul_snad",
  "utilitarian:drit",
  "utilitarian:grrass"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_Utilitarian.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_Utilitarian.forEach(itemId => {
    event.remove(itemId);
  });
})

console.error("!!!Fai doppio click qui!!!!");
// La Utilitarian aggiunge anche queste cose troppo op che ho disattivato,
// per riattivarle cancella questo file e la sua cartella, altrimenti cancella solo queste 3 righe"