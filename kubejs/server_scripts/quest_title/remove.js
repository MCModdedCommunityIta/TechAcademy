const itemsToRemove_quest_title = [
  "quest_titles:crystal_chronicles",
  "quest_titles:crystal",
  "quest_titles:cataclysm",
  "quest_titles:store_1",
  "quest_titles:initial_armor",
  "quest_titles:codexof_champions",
  "quest_titles:codex",
  "quest_titles:discerning",
  "quest_titles:ozmandias",
  "quest_titles:alshanex",
  "quest_titles:ultimate",
  "quest_titles:others",
  "quest_titles:fire",
  "quest_titles:holy",
  "quest_titles:nature",
  "quest_titles:blood",
  "quest_titles:thunder",
  "quest_titles:eldritch",
  "quest_titles:evocation",
  "quest_titles:ice",
  "quest_titles:ender",
  "quest_titles:red_dragon",
  "quest_titles:blue_dragon",
  "quest_titles:a",
  "quest_titles:b",
  "quest_titles:c",
  "quest_titles:d",
  "quest_titles:e",
  "quest_titles:f",
  "quest_titles:g",
  "quest_titles:h",
  "quest_titles:i",
  "quest_titles:j",
  "quest_titles:k",
  "quest_titles:l",
  "quest_titles:m",
  "quest_titles:n",
  "quest_titles:o",
  "quest_titles:p",
  "quest_titles:q",
  "quest_titles:r",
  "quest_titles:s",
  "quest_titles:t",
  "quest_titles:u",
  "quest_titles:v",
  "quest_titles:w",
  "quest_titles:x",
  "quest_titles:y",
  "quest_titles:z",
  "quest_titles:books",
  "quest_titles:staffs",
  "quest_titles:wizard_initiation",
  "quest_titles:storetitle",
  "quest_titles:cog",
  "quest_titles:enchanting_apparatus",
  "quest_titles:arcane_pedestal",
  "quest_titles:tempad_screen",
];

ServerEvents.recipes((event) => { 
  itemsToRemove_quest_title.forEach((itemID) => {
    event.remove({ output: itemID });
  });
});


RecipeViewerEvents.removeEntriesCompletely('item', event => {
  itemsToRemove_quest_title.forEach(itemId => {
    event.remove(itemId);
  });
})



