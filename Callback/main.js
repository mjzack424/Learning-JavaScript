const saySomething = (say) => {
  console.log(say);
};

const callSaySomething = (textToPass) => {
  saySomething(textToPass);
};

callSaySomething("hello world 🌍");
