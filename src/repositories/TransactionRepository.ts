import Transaction, {TransactionDocument, TransactionAttributes } from "../model/Transaction";
import { ITransactionDTO, ITransactionRepository } from "./ITransactionRepository";


class TransactionRepository implements ITransactionRepository{
    constructor(){

    }

    async searchId(id: string): Promise<TransactionDocument> {
        return await Transaction.findById(id);
    }

    async fundTransfer({accountOrigin ,  accountDestination, value}: ITransactionDTO): Promise<TransactionDocument> {

        const transfer: TransactionAttributes = {
            create_at: new Date(),
            accountOrigin: accountOrigin,
            accountDestination: accountDestination,
            value: value,
            status: "In Queue",
            type: "Credit"
        } 
       return await Transaction.create(transfer);
    }

}

export {TransactionRepository}