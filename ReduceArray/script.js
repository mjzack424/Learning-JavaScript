const numbers2 = [1, -1, 2, 3];
let sum = 0;
for (let numb of numbers2) {
  sum += numb;
}
console.log(sum);

const sum2 = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum2);
