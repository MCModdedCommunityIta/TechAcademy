// priority: 10000000


/**
 * Retrieves the tags associated with the specified item ID.
 *
 * @param {string} _id - The ID of the item to retrieve tags for (e.g., "minecraft:copper").
 * @returns {string[]} An array of tags associated with the item ID.
 */
function getTagsById(_id){
  return Item.of(_id).getTags();
}

/**
 * Retrieves an array of item IDs associated with a given tag.
 *
 * @param {string} _tag - The tag to retrieve item IDs for (e.g., "#c:ingots/copper").
 * @returns {string[]} An array of item IDs associated with the tag.
 */
function getIdsByTagPost(_tag){
  return Ingredient.of(_tag).itemIds;
}

/**
 * Retrieves an array of item IDs associated with a given tag before a specific event.
 *
 * This function is intended to be used in scenarios where item IDs need to be fetched 
 * prior to a certain event being processed. It takes into account the tag context
 * provided by the `tagEvent` parameter.
 *
 * @param {$TagEventProbe} tagEvent - The event context in which the tag is being processed.
 * @param {string} _tag - The tag to retrieve item IDs for (e.g., "#c:ingots/copper").
 * @returns {string[]} An array of item IDs associated with the tag before the event.
 */

function getIdsByTagPre(tagEvent, _tag){
  return tagEvent.get(_tag).getObjectIds();
}


/**
 * Retrieves all subtags related to ingots from a specified tag.
 *
 * This function iterates over all item IDs corresponding to ingots, 
 * extracts their tags, and filters out tags that include "c:ingots/".
 * The filtered tags are then collected and returned as an array.
 *
 * @param {string} _tag - The tag to retrieve subtags for (e.g., "c:ingots").
 * @returns {string[]} An array of subtags related to the specified tag.
 */
function getSubTags(_tag) {
  let itemIDs = getIdsByTagPost(`#${_tag}`);
  let tags = [];

  itemIDs.forEach((ingotID) => {
    let itemTags = getTagsById(ingotID)
      .filter((tag) => `${tag}`.includes(`${_tag}/`));
    itemTags.forEach((tag) => {
      tags.push(tag);
    });
  });
  return tags;
}


/**
 * Retrieves all unified subtags related to a specified tag.
 *
 * This function iterates over all unified tags, filters out tags that include
 * the specified tag, and collects the filtered tags as an array.
 *
 * @param {string} _tag - The tag to retrieve unified subtags for (e.g., "c:ingots").
 * @returns {string[]} An array of unified subtags related to the specified tag.
 */
function getUnifiedSubTags(_tag) {
  let tags = [];
  const allTag = AlmostUnified.getTags()

  allTag.filter((tag) => `${tag}`.includes(`${_tag}/`)).forEach((tag) => {
      tags.push(tag);
  });
  return tags;

}



/**
 * Retrieves an array of objects that map material tags in `_tagA` to corresponding material tags in `_tagB`.
 *
 * This function iterates over all subtags of `_tagA`, extracts the material name from each subtag, and checks
 * if there is a subtag in `_tagB` with the same material name. If there is, an object is created with the
 * subtag from `_tagA` as the key and the subtag from `_tagB` as the value, and this object is added to the
 * result array.
 *
 * @param {string} _tagA - The tag to retrieve subtags from (e.g., "c:ores").
 * @param {string} _tagB - The tag to retrieve subtags to (e.g., "c:raw_materials").
 * @returns {Object[]} An array of objects, each with a key-value pair mapping a subtag of `_tagA` to a subtag of `_tagB`.
 */
function getAtoB(_tagA, _tagB) {
  let result=[];
  getUnifiedSubTags(_tagA).forEach((mtA) => {
    let material = `${mtA}`.split("/")[1]
    if (getUnifiedSubTags(_tagB).some(mtB => `${mtB}`.includes(`${_tagB}/${material}`))){
      result.push({"input": mtA, "output": `${_tagB}/${material}`});
    } else if (getSubTags(_tagB).some(mtB => `${mtB}`.includes(`${_tagB}/${material}`))){
      result.push({"input": mtA, "output": `${_tagB}/${material}`});
    }
    
  })
  return result;
}

/**
 * Checks if an item with the specified ID exists.
 *
 * This function determines whether an item with the given ID is present in the game.
 * It returns true if the item is not equivalent to "minecraft:air", indicating that
 * the item exists; otherwise, it returns false.
 *
 * @param {string} _id - The ID of the item to check for existence (e.g., "minecraft:stone").
 * @returns {boolean} True if the item exists, false otherwise.
 */
function itemExists(_id) {
  return ! (`${Item.of(_id)}`.includes("minecraft:air"));
}


/**
 * Retrieves the target item associated with the specified tag or, if the tag does not correspond to an item, the first item ID associated with the tag.
 *
 * @param {string} _tag - The tag to retrieve the target item for (e.g., "c:ores/copper").
 * @returns {$ItemStack} The target item associated with the tag, or the first item ID associated with the tag if no target item exists.
 */
function getTagOutput(_tag){
  let targetItem = AlmostUnified.getTagTargetItem(_tag);
  let altItem = Item.of(Ingredient.of(`#${_tag}`).itemIds[0]);

  return !targetItem.id.includes("air") ? targetItem : altItem
  
}

/**
 * Retrieves the target item associated with the specified item or returns a default item if the target item is not found.
 *
 * This function attempts to find the variant item target for the given item using AlmostUnified. 
 * If the target item is equivalent to "minecraft:air" (indicating it does not exist), a default 
 * item ("immersiveengineering:insulating_glass") is returned instead. The function logs the 
 * result to the console for debugging purposes.
 *
 * @param {string} _item - The item to retrieve the target item for (e.g., "minecraft:stone").
 * @returns {$ItemStack} The target item associated with the item, or a default item if no target item exists.
 */

function getItemOutput(_item){
  let targetItem = AlmostUnified.getVariantItemTarget(_item);
  let altItem = Item.of(_item)
  
  return !targetItem.id.includes("air") ? targetItem : altItem
  
}


// function recipeIdExists(recipeEvent, recipeId) {
//   let recipesNumber = 0;
//   recipeEvent.forEachRecipe({ id: recipeId }, (recipe) =>{
//       recipesNumber++;    
//   });
//   return recipesNumber > 0
  
// }