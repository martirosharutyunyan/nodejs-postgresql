import express from 'express';
const app = express.Router();
import { client } from '../model/postgreSQL';        

app.post('/',async (req, res):Promise<void>=>{
    try{
        const id: number = req.body.id
        const query: string = `DELETE FROM users WHERE id = ${id}`
        client.query(query,(err:Error,data):void=>{
            if(err) throw err
            res.send('deleted')
        })
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;