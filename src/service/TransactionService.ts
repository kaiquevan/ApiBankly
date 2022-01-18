import {  ITransactionRepository } from '../repositories/ITransactionRepository';
import { AppError } from '../erros/AppError';
import Transaction, { TransactionDocument } from '../model/Transaction';
import { TransactionRepository } from '../repositories/TransactionRepository';
//import { getAccount } from '../routes/transaction.routes';
const axios = require("axios");

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

        return await this.transactionRepository.searchId(id);   
    }

    async fundTransfer({accountOrigin ,  accountDestination, value}: IRequest):Promise<TransactionDocument>{
        return  await this.transactionRepository.fundTransfer({accountOrigin ,  accountDestination, value});

    }

    async getAccount(){
        console.log('------------------ chamou')
       https://acessoaccount.herokuapp.com/api/Account
    
        try{
            return JSON.parse(JSON.stringify(axios.get("https://acessoaccount.herokuapp.com/api/Account").then(function(response){return response})));
        
        }catch(err)
        {
            console.log('-----------' + err)
        }
        // const promise = new Promise( (resolve, reject) => {
        //     const apiResult = axios.get("https://acessoaccount.herokuapp.com/api/Account");
        //     if (apiResult){
        //         resolve(apiResult)
        //     }else{
        //         reject( new Error('não foi'))
        //     }
        // })
        
            // const apiResult = await axios.get("https://acessoaccount.herokuapp.com/api/Account");
            // return {apiResult:'chamou a api'};
      
    }
}

export {TransactionService}