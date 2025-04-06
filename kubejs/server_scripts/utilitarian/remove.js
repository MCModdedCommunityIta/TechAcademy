const itemsToRemove_utilitarian = [
  "utilitarian:snad",
  "utilitarian:red_snad",
  "utilitarian:soul_snad",
  "utilitarian:drit",
  "utilitarian:grrass"
];

ServerEvents.recipes((event) => { 
  itemsToRemove_utilitarian.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_utilitarian.forEach(itemId => {
    event.remove(itemId);
  });
})

console.error("!!!Fai doppio click qui!!!!");
// La utilitarian aggiunge anche queste cose troppo op che ho disattivato,
// per riattivarle cancella questo file e la sua cartella, altrimenti cancella solo queste 3 righe"