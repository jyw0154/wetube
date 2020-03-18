// requrie =: node moudels을 어딘가에 가져오는 경우
const express = require("express");
const app = express();

const PORT = 1234;

const handleListenting = () => {
  console.log(`Listenting on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListenting);
