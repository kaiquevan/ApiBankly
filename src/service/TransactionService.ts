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

    async getAccount(): Promise<any>{
            return axios.get("https://acessoaccount.herokuapp.com/api/Account").then(function(response){
                return response.data.map(function(x){
                    return x
                }) ;
        }).catch( err => {
            return err;
        })
      
    }

    async postAccount(request): Promise<any>{
        console.log(request)
            return axios.post("https://acessoaccount.herokuapp.com/api/Account",{request}).then(function(response){
                return response.data.map(function(x){
                    return x
                }) ;
        }).catch( err => {
            return {error: 'Não foi possivel criar a conta, tente novamente mais tarde',
                    status: 500,};
        })
      
    }

    async findAccount(accountNumber): Promise<any>{
        console.log(accountNumber)
            return axios.get(`https://acessoaccount.herokuapp.com/api/Account/${accountNumber}`).then(function(response){
                return response.data.map(function(x){
                    return x
                }) ;
        }).catch( err => {
            return {error: 'Não foi possivel encontrar a conta, tente novamente mais tarde',
                    status: 500,};
        })
      
    }
}

export {TransactionService}