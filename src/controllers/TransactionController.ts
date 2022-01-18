import {Request, Response} from 'express';
import { TransactionService } from '../service/TransactionService';
import { TransactionRepository } from '../repositories/TransactionRepository';

const  transactionRepository = new TransactionRepository();

class TransactionController{


         //GET BY ID
        async searchId(request: Request, response: Response): Promise<Response>{
            const { id } = request.query;
            
            const transactionService = new TransactionService(transactionRepository);
            
            const transaction = await transactionService.searchId(id as string);

            return response.status(201).json({
                status: transaction.status,
            });
                
            
        }

        // fund-transfer
        async fundTransfer(request: Request, response: Response): Promise<Response>{
            const{accountOrigin ,  accountDestination, value} = request.body;
            
            const transferService = new TransactionService(transactionRepository);
            
            
            const transaction = await transferService.fundTransfer({accountOrigin ,  accountDestination, value})
            
            return response.status(201).json({
                transactionId: transaction.id
            });
        }

        
        // MONTAR UM GET PRO AXIO E UM MODEL QUE RECEBA O JSON DA API EXTERNA

        async getAccount(response: Response): Promise<Response>{

            const transferService = new TransactionService(transactionRepository);
            
            
            const transaction = await transferService.getAccount()

            console.log(' retorno - ' + JSON.stringify(transaction)) 
            
            return response.status(201).json(transaction.data);
            

        }

}

export {TransactionController};