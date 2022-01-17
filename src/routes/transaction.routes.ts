import { request, response, Router } from "express";
import { TransactionController } from "../controllers/TransactionController";

const transactionRoutes =  Router();
const transactionController = new TransactionController();

transactionRoutes.get("/fund-transfer/id", transactionController.searchId);

transactionRoutes.post("/fund-transfer", transactionController.fundTransfer);

export{transactionRoutes};