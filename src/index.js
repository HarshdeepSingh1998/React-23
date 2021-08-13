import animals, { useAnimal } from "./data";

// console.log(animals);

const [cat, dog] = animals;

console.log(cat);

const { name, sound } = cat;

const { name: catName, sound: catSound } = cat;
console.log(catSound);

// set the name from cat to fluffy
const { name = "Fluffy", sound = "Aoo" } = cat;
console.log(name);

// nested objects

const { name, sound, feedingRequirements } = cat;

console.log(feedingRequirements);

// destructuring feedingRequirements

const {
  name,
  sound,
  feedingRequirements: { food, water }
} = cat;

console.log(food);

// useState

const [animal, makeSound] = useAnimal(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
