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

    constructor(private produtosRepository: ITransactionRepository ){ }

    async searchId(transactionId:string): Promise<TransactionDocument>{
        return await this.produtosRepository.searchId(transactionId);   
    }

}

export {TransactionService}