console.log("start...⏳");

const sec = 1000; //1S
const name = "zack";

const eatLunch = (name) => {
  console.log(`${name} eated lunch 🍴...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} eated lunch ✅`);
      resolve();
    }, 5 * sec);
  });
};

const dressup = (name) => {
  console.log(`${name} is dressing up 👚...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} is dressed up ✅`);
      resolve();
    }, 5 * sec);
  });
};

const driveToWork = (name) => {};

const getReady = (name) => {};

eatLunch(name)
  .then(() => dressup(name))
  .then(() => {
    console.log(`${name} now is in work✅`);
  })
  .catch((err) => {
    console.log(err);
  });
