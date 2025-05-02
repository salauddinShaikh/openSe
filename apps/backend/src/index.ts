import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

app.get("/courses", (_req, res) => {
  res.status(200).json({});
});

export default app;
