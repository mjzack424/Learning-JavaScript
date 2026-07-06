//String Sort
const person = [
  { name: "mohammad javad", age: 30 },
  { name: "zahra", age: 25 },
  { name: "mojgan", age: 35 },
  { name: "hassan", age: 45 },
  { name: "reyhane", age: 40 },
  { name: "parsa", age: 6 },
];
const sortePerson = person.sort((a, b) => {
  a.age - b.age;
});
console.log(sortePerson);

//String Sort
const names = [
  "mohammad javad",
  "zahra",
  "mojgan",
  "hassan",
  "reyhane",
  "parsa",
];
const sortedNumber = names.sort();
console.log(sortedNumber);

//Number Sort
const arr = [1, 2, 3, 99, 34, 11];

const sortedArrayAb = arr.sort((a, b) => {
  return a - b;
}); //Sort Number ac
console.log(sortedArrayAb);

const sortedArrayBa = arr.sort((a, b) => {
  return b - a;
}); //Sort Number dc
console.log(sortedArrayBa);

//pro way
const sortType = (a, b) => a - b;
sortedArray = arr.sort(sortType);
console.log(sortedArray);
