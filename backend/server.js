import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import dataIbuRoutes from "./routes/ibu.route.js";
import dataBayiRoutes from "./routes/bayi.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/ibu", dataIbuRoutes);
app.use("/api/bayi", dataBayiRoutes);

app.get("/", function (req, res) {
  res.send("GET request to homepage");
});
app.listen(PORT, async () => {
  console.log("App is running on port " + PORT);
  connectDb();
});
