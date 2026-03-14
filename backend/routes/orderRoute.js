import express from "express";
import { getAllOrders, getUsersOrders, placeOrderCod } from "../controllers/orderController.js";
import authUser from "../middlewares/authUser.js";
import authSeller from "../middlewares/authSeller.js";
import { changeStock } from "../controllers/productController.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.get("/user", authUser, getUsersOrders);
orderRouter.get("/seller", authSeller, getAllOrders);
orderRouter.post("/stock", authSeller, changeStock);

export default orderRouter;