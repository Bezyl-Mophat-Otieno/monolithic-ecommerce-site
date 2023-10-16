import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./backend/config/connection.js";
import customerRouter from "./backend/routes/customer/customer-routes.js";
import productRouter from "./backend/routes/product/product-routes.js";
import orderRouter from "./backend/routes/order/order-routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/customer/", customerRouter);
app.use("/api/product/", productRouter);
app.use("/api/order/", orderRouter);
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
