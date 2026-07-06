function ClassicFuntion() {
  alert("Classic Function");
}

const Arrowfuntion = () => {
  alert("Arrow Function");
};

const age = 10;
let name = "zack";

if (age > 10) {
  name = "mamad";
} else {
  name = "javad";
}

name = age > 10 && "Pedro"; //if
name = age > 10 || "Pedro"; //Not
name = age > 10 || "Pedro"; //Not

name = age > 10 ? "Pedro" : "jack"; //if/else

//*Objects
const person = {
  name: "zack",
  age: 30,
  bMarried: true,
};

const newName = person.name;
const newAge = person.age;
const isMarried = person.bMarried;

//*destructuring
const { name: secName, age: secAge, bMarried: bSecMarried } = person;

const person2 = { ...person, name: "shrek" };

const names = ["Pedro", "john", "jack", "pitter"];
const names2 = [...names, "joel"];

//*Filter
const number = [1, 2, 3, 4, 5];

const filterdNumber = number.filter((numb) => {
  return numb < 4;
});
console.log(filterdNumber);

//shorter way
const filteredNumber2 = number.filter((num) => num >= 2);
console.log(filteredNumber2);

const peopleInTheTown = [
  { id: 1, names: "mohammad javad", age: 30 },
  { id: 2, names: "zahra", age: 25 },
  { id: 3, names: "mojgan", age: 34 },
  { id: 4, names: "reyhane", age: 50 },
  { id: 5, names: "mohammad hasan", age: 60 },
  { id: 6, names: "mohammad parsa", age: 6 },
];

const child = peopleInTheTown.filter((p) => p.age < 10);
console.log(child);

const mohammads = peopleInTheTown.filter((p) =>
  p.names.toLowerCase().trim().includes("mohammad"),
);
console.log(mohammads);
