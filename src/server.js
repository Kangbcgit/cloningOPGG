import express from "express";
import router from "./api";

const app = express();
const PORT = 5000;

// app.use("/api", router);

app.use("/", router);
app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동!!`))