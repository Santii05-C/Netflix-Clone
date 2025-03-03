import express from "express";

import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/movie", protectRoute, movieRoutes);
// app.use("/api/v1/tv", protectRoute, tvRoutes);
// app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
