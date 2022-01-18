import mongoose, { Document, Model, Schema} from 'mongoose';

export type TransactionAttributes = {
    accountOrigin: string;
    accountDestination:string;
    value: number;
    type: string;
    status: string;
    create_at: Date;
}

export type TransactionDocument = Document & TransactionAttributes;
type TransactionModel = Model<TransactionDocument>;

const TransactionSchema = new Schema(
    {
        accountOrigin:{
            type: String,
            required: true
        },
        accountDestination:{
            type: String,
            required: true
        },
        value:{
            type: Number,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true
        },
        create_at:{
            type: Date,
            required: true
        }

    }
)

export default mongoose.model<TransactionDocument, TransactionModel>('Transaction', TransactionSchema);