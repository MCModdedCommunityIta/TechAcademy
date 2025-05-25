const anyLang = {
  _key: [
    //-------------------------------------------// compact machines
    "machine.compactmachines.colossal",
    "machine.compactmachines.giant",
    "machine.compactmachines.large",
    "machine.compactmachines.normal",
    "machine.compactmachines.small",
    "machine.compactmachines.soaryn",
    "machine.compactmachines.farming",
    "machine.compactmachines.tiny",
    //-------------------------------------------// kubejs oredic
    "item.kubejs.ore_dictionary.tooltip1",
    "item.kubejs.ore_dictionary.tooltip2",
    //-------------------------------------------// buttons
    "tech_academy.continue_button.key",
  ],
  en_us: [
    //-------------------------------------------// compact machines
    "Compact Machine - Colossal - (13x13x13) ",
    "Compact Machine - Giant - (11x11x11)",
    "Compact Machine - Large - (9x9x9)",
    "Compact Machine - Normal - (7x7x7)",
    "Compact Machine - Small - (5x5x5)",
    "Compact Machine - Soaryn - (45x45x45)",
    "Compact Machine - Farming - (21x11x21)",
    "Compact Machine - Tiny - (3x3x3)",
    //-------------------------------------------// kubejs oredic
    "Allows you to §oconvert§r an item in its §ounified version§r based on its tags",
    "§e§lUseful after updates in case of pack changes at the unification system§r",
    //-------------------------------------------// buttons
    "Continue",
  ],
  it_it: [
    // to traslate (?)
    //-------------------------------------------// compact machines
    "Compact Machine - Colossal - (13x13x13) ",
    "Compact Machine - Giant - (11x11x11)",
    "Compact Machine - Large - (9x9x9)",
    "Compact Machine - Normal - (7x7x7)",
    "Compact Machine - Small - (5x5x5)",
    "Compact Machine - Soaryn - (45x45x45)",
    "Compact Machine - Farming - (21x11x21)",
    "Compact Machine - Tiny - (3x3x3)",
    //-------------------------------------------// kubejs oredic
    "Permette di §oconvertire§r un elemento nella sua versione §ounificata§r in base ai suoi tag",
    "§e§lUtile dopo gli aggiornamenti, in caso di modifiche del pacchetto nel sistema di unificazione§r",
    //-------------------------------------------// buttons
    "Continua",
  ],
};


//Convert all _key traslation keys on virtual lang files to reduce multiple json
//NOTE : it could skip some traslation keys! (kubejs issue)
Object.keys(anyLang).forEach((entry) => {
  if (entry == "_key") return;
  ClientEvents.lang(entry, (event) => {
    anyLang._key.forEach((key, index) => {
      event.add(key, anyLang[entry][index]);
    });
  });
});