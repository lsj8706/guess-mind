import path from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 5000;
const app = express();
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req,res) => res.render("home"));



const handleListening = () => console.log(`✅ Server running : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);