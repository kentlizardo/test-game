import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const myFunction = (name: string, age: number) => {
  console.log("Hello, " + name + "! You are " + age + " years old.");

  let unusedVariable = 42; // Unused variable (ESLint should warn about this)

  return { name: name, age: age };
};
