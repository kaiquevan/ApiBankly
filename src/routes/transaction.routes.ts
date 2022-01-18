import { request, response, Router } from "express";
import { TransactionController } from "../controllers/TransactionController";

const axios = require("axios");

const transactionRoutes =  Router();
const transactionController = new TransactionController();

transactionRoutes.get("/fund-transfer/id", transactionController.searchId);

transactionRoutes.post("/fund-transfer", transactionController.fundTransfer);

transactionRoutes.get("/account", transactionController.getAccount);

transactionRoutes.post("/post-account", transactionController.postAccount);

transactionRoutes.get("/find-account", transactionController.findAccount);


export{transactionRoutes};