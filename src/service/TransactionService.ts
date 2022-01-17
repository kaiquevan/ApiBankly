import { ITransactionRepository } from '../repositories/ITransactionRepository';
import { AppError } from '../erros/AppError';
import Transaction, { TransactionDocument } from '../model/Transaction';

interface IRequest{
    transactionId?: string;
    accountOrigin: string;
    accountDestination: string;
    value: number;

}

class TransactionService{

    constructor(private transactionRepository: ITransactionRepository ){ }

    async searchId(id:string): Promise<TransactionDocument>{
        return await this.transactionRepository.searchId(id);   
    }

    async fundTransfer({accountOrigin ,  accountDestination, value}: IRequest):Promise<TransactionDocument>{
        return  await this.transactionRepository.fundTransfer({accountOrigin ,  accountDestination, value});
    }

}

export {TransactionService}