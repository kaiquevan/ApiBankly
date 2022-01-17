import { TransactionDocument } from "../model/Transaction";

interface ITransactionDTO{
    accountNumber: string;
    value: number;
    type: string;
    status: string;
}

interface ITransactionRepository{
    searchId(transactionId:string): Promise<TransactionDocument>;
}

export {ITransactionRepository,ITransactionDTO}