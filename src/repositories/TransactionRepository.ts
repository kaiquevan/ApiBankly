import Transaction, {TransactionDocument, TransactionAttributes } from "../model/Transaction";
import { ITransactionDTO, ITransactionRepository } from "./ITransactionRepository";


class TransactionRepository implements ITransactionRepository{
    constructor(){

    }

    async searchId(transactionId: string): Promise<TransactionDocument> {
        return await Transaction.findById(transactionId);
    }
}

export {TransactionRepository}