import mongoose, { Mongoose} from "mongoose";


    export const connect = async(): Promise<Mongoose> =>
       await mongoose.connect("mongodb+srv://kaiquevan:apibankly@cluster0.6igag.mongodb.net/ApiTransaction?retryWrites=true&w=majority",{
        autoIndex: true,
        autoCreate: true
        });

