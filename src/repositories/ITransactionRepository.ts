import { TransactionDocument } from "../model/Transaction";

interface ITransactionDTO{
    accountOrigin: string;
    accountDestination: string;
    value: number;
}

interface ITransactionRepository{
    searchId(transactionId:string): Promise<TransactionDocument>;
    fundTransfer({accountOrigin,  accountDestination, value}: ITransactionDTO):Promise<TransactionDocument>; 
}

export {ITransactionRepository,ITransactionDTO}