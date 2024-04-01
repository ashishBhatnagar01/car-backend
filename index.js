import express from "express";
import mongodb from "mongodb";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  return res.json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  });
});

app.listen(4000, () => {
  console.log("App is running on PORT ====>>>> 4000");
});
