// Go through each sample code and work out what the output will be and explain what happened.
//
//**** Episode 1****
const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();
//
// //➜  day1 node js_first_hmwrk.js
// // My name is Keith
//
// // this is const fuction that has the costant variable name Keith, it will print out My name is Keith by incapsulating it

// Episode 2
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

// ➜  day1 node js_first_hmwrk.js
// 3

// again const has the started value of 5 but  the runnig the function has resigning a new variable to the costant that is 3. the print out will be 3.

// // Episode 3
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
 const myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i == myAnimals.length;) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();


// TypeError: Assignment to constant variable.

// it's been tried to assign the value to the const variable my Animals. you can't assign two values to the same cosntant v.
//
// // Episode 4
const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log(`Suspects include: ${suspectOne}, ${suspectTwo}, ${suspectThree}, ${suspectFour}`);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

// ➜  day1 node js_first_hmwrk.js
// My name is Keith
// 3
// Suspects include: Jay Val Harvey Rick
// Suspect three is: Keith

// the first printout has not included the incapsulation so the parameters will come as long name without coma

// // Episode 5
// const detective = {
//   name: 'Ace Ventura',
//   pet: 'monkey'
// };
//
// const printName = function (detective) {
//   return detective.name;
// }
//
// const detectiveInfo = function () {
//   detective['name'] = 'Poirot';
//   return printName(detective);
// }
//
// console.log(detectiveInfo());
// //
// // Episode 6
// const murderer = 'rick';
//
// const outerFunction = function () {
//   const murderer = 'marc';
//
//   const innerFunction = function () {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log(`The murderer is: ${ murderer }`);

// Episode 7 - Make up your own episode(s)!
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
