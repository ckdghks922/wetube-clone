import "./db";
import "./models/Video";
import app from "./index";

const PORT = 4000;

const handleListening = () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
