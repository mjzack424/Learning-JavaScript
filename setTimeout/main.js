//Asynchronous
// const timer = 2000; //2S
const second = 1000; //1S
const timer = second * 60; //1min
let timeCount = 0;

console.log(`START ⏳: timer ${timer}`);

setInterval(() => {
    timeCount++;
  console.log(`counter: ${timeCount}`);
}, second);

setTimeout(() => {
  console.log("Timeout 🥲  ✅");
  console.log(`END ⏳: timer ${timer}`);
}, timer);

