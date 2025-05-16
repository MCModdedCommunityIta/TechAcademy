// function oritechInputHelper(recipe) {
//   let inpsRes = [];
//   let ingredients=[]
//   recipe["ingredients"]
//   for (let i = 0; i < 2; i++) {
//     let inpRes = {
//       "count": "count" in recipe[`input${i}`] ? recipe[`input${i}`]["count"] : 1,
//     };
//     if (
//       "basePredicate" in recipe[`input${i}`] &&
//       "tag" in recipe[`input${i}`]["basePredicate"]
//     ) {
//       inpRes["tag"] = recipe[`input${i}`]["basePredicate"]["tag"];
//     } else if ("tag" in recipe[`input${i}`]) {
//       inpRes["tag"] = recipe[`input${i}`]["tag"];
//     } else if ("item" in recipe[`input${i}`]) {
//       inpRes["item"] = recipe[`input${i}`]["item"];
//     }
//     inpsRes.push(inpRes);
//   }

//   return inpsRes;
// }

// function oritechOutputHelper(recipe) {
//   let outRes = {
//     "count": "count" in recipe["result"] ? recipe["result"]["count"] : 1,
//   };
//   if (
//     "basePredicate" in recipe["result"] &&
//     "tag" in recipe["result"]["basePredicate"]
//   ) {
//     outRes["tag"] = recipe["result"]["basePredicate"]["tag"];
//   } else if ("tag" in recipe["result"]) {
//     outRes["tag"] = recipe["result"]["tag"];
//   } else if ("id" in recipe["result"]) {
//     outRes["item"] = recipe["result"]["id"];
//   }
//   return outRes;
// }


function immersiveInputHelper(recipe) {
  let inpsRes = [];

  for (let i = 0; i < 2; i++) {
    let inpRes = {
      "count": "count" in recipe[`input${i}`] ? recipe[`input${i}`]["count"] : 1,
    };
    if (
      "basePredicate" in recipe[`input${i}`] &&
      "tag" in recipe[`input${i}`]["basePredicate"]
    ) {
      inpRes["tag"] = recipe[`input${i}`]["basePredicate"]["tag"];
    } else if ("tag" in recipe[`input${i}`]) {
      inpRes["tag"] = recipe[`input${i}`]["tag"];
    } else if ("item" in recipe[`input${i}`]) {
      inpRes["item"] = recipe[`input${i}`]["item"];
    }
    inpsRes.push(inpRes);
  }

  return inpsRes;
}

function immersiveOutputHelper(recipe) {
  let outRes = {
    "count": "count" in recipe["result"] ? recipe["result"]["count"] : 1,
  };
  if (
    "basePredicate" in recipe["result"] &&
    "tag" in recipe["result"]["basePredicate"]
  ) {
    outRes["tag"] = recipe["result"]["basePredicate"]["tag"];
  } else if ("tag" in recipe["result"]) {
    outRes["tag"] = recipe["result"]["tag"];
  } else if ("id" in recipe["result"]) {
    outRes["item"] = recipe["result"]["id"];
  }
  return outRes;
}
