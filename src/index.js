import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
};

const handleGoHome = (req, res) => {
  return res.send("I love MiddleWares!");
};

app.get("/", logger, handleGoHome);

const handleListening = () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
