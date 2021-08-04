/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getTallestDinosaur(dinosaurs) {
  //declare a var, assign it an empty obj
  let tallest = {};
  //create var, assign it disnosaurs at the first index
  let currentDino = dinosaurs[0];
  //if the dinosaurs arent there
  if (dinosaurs.length === 0) {
    //return the tallest
    return tallest;
  }
  //for of loop through our dinosaurs array incrementing by 1
  for (const dino of dinosaurs) {
    //if the dinos height is bigger than our current dinos height
    if (dino.lengthInMeters > currentDino.lengthInMeters) {
      //then our current dino is now the dino that was taller
      currentDino = dino;
    }
  }
  //the current dinos name in our obj is equal to the height in meters times 3.281 to make it feet
  tallest[currentDino.name] = currentDino.lengthInMeters * 3.281;
  //return the tallest
  return tallest;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  //for of loop thorugh our dinosaurs array
  for (const dino of dinosaurs) {
    //
    let mya = dino.mya[dino.mya.length - 1];
    // if dino id and mya has one value
    if (dino.dinosaurId === id) {
      //then return the description
      return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${mya} million years ago.`;
    }
  }
  //if else then return the error msg
  return `A dinosaur with an ID of 'incorrect-id' cannot be found.`;
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  //Returns an array of dinosaurs who were alive at the given `mya` (i.e. “millions of years ago”) value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
  //set an empty array variable to push the dinosaur names into
  let dinos = [];
  //loop through the dinosaur array to check if mya value matches mya parameter.
  for (const dino of dinosaurs) {
    //if the the mya given is in the dino mya and the key is name
    if (dino.mya.includes(mya) && key === "name") {
      //then push the dino name
      dinos.push(dino.name);
      //if the length of the mya array is 1 and the value of mya given is the mya or is one less than the mya
    } else if (
      dino.mya.length === 1 &&
      (dino.mya - 1 === mya || dino.mya === mya)
    ) {
      //push the id into array
      dinos.push(dino.dinosaurId);
      //if the mya is included in the dino mya
    } else if (dino.mya.includes(mya)) {
      //push the id
      dinos.push(dino.dinosaurId);
    } else if (dino.mya[0] >= mya && dino.mya[1] <= mya) {
      dinos.push(dino.dinosaurId);
    }
  }
  //return the array
  return dinos;
}
getDinosaursAliveMya(exampleDinosaurData, 65);
module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
