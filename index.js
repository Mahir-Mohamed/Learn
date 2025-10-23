import express from "express";
import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/Login", (req, res) => {
  res.send("This is a login page");
});

dotenv.config({ path: "/custom/path/to/.env" });
app.listen(3000);
