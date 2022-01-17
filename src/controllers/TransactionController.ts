import {Request, Response} from 'express';
import { TransactionService } from '../service/TransactionService';
import { TransactionRepository } from '../repositories/TransactionRepository';

const  transactionRepository = new TransactionRepository();

class TransactionController{


         //Post
        async searchId(request: Request, response: Response): Promise<Response>{
            const { transactionId } = request.query;
            
            const transactionService = new TransactionService(transactionRepository);
            
            const transaction = await transactionService.searchId(transactionId as string);
            
            return response.json(transaction);
        }



}

export {TransactionController};