const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("api started");
});

app.get("/chats", (req, res) => {
  res.send(chats);
});

app.get("/chats/:id", (req, res) => {
  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);

  res.send(singleChat);
});

const PORT = process.env.port || 5000;

app.listen(5000, console.log("serve started at " + PORT));
