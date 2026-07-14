const uglyPigs = ["trump", "reza pahlavi", "devil", "shahin najafi"];

console.log("trump" in uglyPigs); //کد شما false برمی‌گرداند چون اپراتور in در آرایه‌ها به دنبال ایندکس (کلید عددی) می‌گردد، نه مقدار!✖️
console.log("0" in uglyPigs); // true

console.log(uglyPigs.includes("trump")); //true
console.log(uglyPigs.some((item) => item === "trump")); // true

const person = {
  name: "mohammad",
  age: 30,
};

console.log("name" in person); //✅
console.log("education" in person); //❌
console.log("toString" in person); // true  → چون از Object.prototype ارث برده
console.log("length" in person); // true
console.log(person.length); // undefined
console.log("length" in person); // false
