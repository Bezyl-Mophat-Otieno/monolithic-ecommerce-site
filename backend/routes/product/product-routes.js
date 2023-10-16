import { Router } from "express";
import addProduct from "../../controllers/product/add-product.js";
import getProduct from "../../controllers/product/get-product.js";
import updateProduct from "../../controllers/product/update-product.js";
import deleteProduct from "../../controllers/product/delete-product.js";
import fetchProducts from "../../controllers/product/fetch-products.js";

const productRouter = new Router();

productRouter.post("/add", addProduct);
productRouter.get("/get/:id", getProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/fetch", fetchProducts);

export default productRouter;
