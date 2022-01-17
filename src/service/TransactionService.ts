import { ITransactionRepository } from '../repositories/ITransactionRepository';
import { AppError } from '../erros/AppError';
import { TransactionDocument } from '../model/Transaction';

interface IRequest{
    transactionId?: string;
    accountNumber: string;
    value: number;
    type: string;
    status: string;

}

class TransactionService{

    constructor(private transactionRepository: ITransactionRepository ){ }

    async searchId(transactionId:string): Promise<TransactionDocument>{
        return await this.transactionRepository.searchId(transactionId);   
    }

}

export {TransactionService}