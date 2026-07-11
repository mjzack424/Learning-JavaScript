function PrintText(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }
  console.log(text);
}

PrintText("Hello, World!");
PrintText(123);
