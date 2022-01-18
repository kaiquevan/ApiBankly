import { request, response, Router } from "express";
import { TransactionController } from "../controllers/TransactionController";

const axios = require("axios");

const transactionRoutes =  Router();
const transactionController = new TransactionController();

transactionRoutes.get("/fund-transfer/id", transactionController.searchId);

transactionRoutes.post("/fund-transfer", transactionController.fundTransfer);

const getAccount = () => { 

   //return axios.get("https://acessoaccount.herokuapp.com/api/Account");
    return "ABC";
}

transactionRoutes.get("/Account", transactionController.getAccount);

export{transactionRoutes};