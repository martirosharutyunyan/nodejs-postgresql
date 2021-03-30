import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { client } from './model/postgreSQL';
const app = express();
const port: number | string = process.env.PORT;
const mongoURL: string = process.env.mongodb;

client.connect(((err:Error):void=>{
    if(err) throw err
    console.log('connected to postgresDB')
}))

app.use(morgan(`dev`));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);
app.use('/getUsers',require('./router/getUsers'));
app.use('/sendUsers',require('./router/sendUsers'));
app.use('/deleteUser',require('./router/deleteUser'))

app.listen(port, (): void => console.log(`server is runing on port ${port}`));
