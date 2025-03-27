import express from "express";

const app = express();
app.use("/",express.static("public"))
const port = 4000;

// Para empezar el proyecto hara esto:
app.listen(4000, console.log("http://localhost:"+port));



