import express from "express";

const PORT = 4000;
const app = express();

const gossipMiddleWare = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleGoHome = (req, res) => {
  return res.send("I love MiddleWares!");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.use(gossipMiddleWare);
app.get("/", handleGoHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
