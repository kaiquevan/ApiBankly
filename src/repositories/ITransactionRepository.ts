import { TransactionDocument } from "../model/Transaction";

interface ITransactionDTO{
    accountOrigin: string;
    accountDestination: string;
    value: number;
}

interface IApiDTO{
    data: string;
}

interface ITransactionRepository{
    searchId(id:string): Promise<TransactionDocument>;
    fundTransfer({accountOrigin,  accountDestination, value}: ITransactionDTO):Promise<TransactionDocument>; 
    teste(): Promise<any>;
}

export {ITransactionRepository,ITransactionDTO,IApiDTO}