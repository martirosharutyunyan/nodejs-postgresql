import express from 'express';
const app = express.Router();
import { client } from '../model/postgreSQL';

app.post('/',async (req, res):Promise<void>=>{
    try{
        const query: string = 'SELECT * FROM users';
        client.query(query,(err:Error,data):void=>{
            if(err) throw err
            res.send(data.rows)
        })
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;