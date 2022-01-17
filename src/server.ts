import express from 'express';
import { transactionRoutes } from './routes/transaction.routes';
import 'express-async-errors';
import * as database from './database'
import { AppError } from './erros/AppError';

database.connect();

const app = express();

app.use(express.json());

app.use(transactionRoutes);

//Middlaware de erro

app.use((err, request, response,next)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode)
        .json({
            status : "error",
            message : err.message
        });
    }

    return response.status(500)
    .json({
        status : "error",
        message : "internal server error"
    })

})

// adicionar uma porta
app.listen(process.env.PORT || 5000, () => console.log("Servidor no ar. http://localhost:5000"));
