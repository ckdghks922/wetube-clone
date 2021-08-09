import express from "express";

const PORT = 4000;
const app = express();

const handleGoHome = (req, res) => {
  return res.send("send");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", handleGoHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
