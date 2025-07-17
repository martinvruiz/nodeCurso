import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { authentication } from "./middleware/auth.middelware.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/auth", authRoutes);
app.use("/api/user", authentication, userRoutes);
app.use("/api/products", authentication, productRoutes);

app.listen(3140, () => console.log("server corriendo"));
