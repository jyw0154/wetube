// requrie =: node moudels을 어딘가에 가져오는 경우
import "core-js";
import express from "express";
const app = express();

const PORT = 4000;

const handleListenting = () => {
  console.log(`Listenting on: http://localhost:${PORT}`);
};
// 서버 기본 동작방식 ( nodejs with express )
const handleHome = (req, res) => {
  res.send("Hello from home 232");
};

const handleProfile = (req, res) => {
  res.send("you are on my profile");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListenting);
