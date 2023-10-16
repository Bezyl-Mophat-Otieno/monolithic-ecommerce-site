import { Router } from "express";
import regsisterCustomer from "../../controllers/customer/register-customer.js";
import loginCustomer from "../../controllers/customer/login-customer.js";
import fetchCustomers from "../../controllers/customer/fetch-customers.js";

const customerRouter = new Router();

customerRouter.post("/register", regsisterCustomer);
customerRouter.post("/login", loginCustomer);
customerRouter.get("/customers", fetchCustomers);

export default customerRouter;
