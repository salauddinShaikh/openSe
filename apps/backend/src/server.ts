import app from "./index";

const PORT = process.env.PORT || 3000;

// Set headers for all responses
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Or specify origin instead of '*'
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
