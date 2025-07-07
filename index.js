import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

app.listen(3140, () => console.log("server corriendo"));
