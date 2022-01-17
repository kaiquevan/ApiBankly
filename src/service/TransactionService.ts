import { ITransactionRepository } from '../repositories/ITransactionRepository';
import { AppError } from '../erros/AppError';
import Transaction, { TransactionDocument } from '../model/Transaction';
import { TransactionRepository } from '../repositories/TransactionRepository';

interface IRequest{
    transactionId?: string;
    accountOrigin: string;
    accountDestination: string;
    value: number;

}

const  transactionRepository = new TransactionRepository();

class TransactionService{

    constructor(private transactionRepository: ITransactionRepository ){ }

    async searchId(id:string): Promise<TransactionDocument>{

        const transactionVoid =  await this.transactionRepository.searchId(id);

        if (transactionVoid == null){
            throw new AppError("Invalid account number");
        }

        return await this.transactionRepository.searchId(id);   
    }

    async fundTransfer({accountOrigin ,  accountDestination, value}: IRequest):Promise<TransactionDocument>{
        return  await this.transactionRepository.fundTransfer({accountOrigin ,  accountDestination, value});
    }

}

export {TransactionService}