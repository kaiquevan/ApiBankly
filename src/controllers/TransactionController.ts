import {Request, Response, } from 'express';
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


        async getAccount(request: Request, response: Response): Promise<Response>{

             const transferService = new TransactionService(transactionRepository);
            
            
            const transaction = await transferService.getAccount()
            
            return response.status(200).json(transaction);
            

        }

        async postAccount(request: Request, response: Response): Promise<Response>{

            const transferService = new TransactionService(transactionRepository);
           
           
           //const transaction = await transferService.postAccount(request)
           
           const transaction = await transferService.postAccount(request)

           return response.status(200).json(transaction);
           

       }

       async findAccount(request: Request, response: Response): Promise<Response>{

        const{accountNumber} = request.query;

        const transferService = new TransactionService(transactionRepository);
            
            
            const transaction = await transferService.findAccount(accountNumber)
            
            return response.status(200).json(transaction);
       

   }

}

export {TransactionController};