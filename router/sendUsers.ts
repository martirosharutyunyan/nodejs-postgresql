import express from 'express';
const app = express.Router();
import { client } from '../model/postgreSQL';


app.post('/',async (req, res):Promise<void>=>{
    try{
        const { email, password } = req.body
        console.log(req)
        const queryForCheck: string = `SELECT * FROM users where email = '${email}'`
        client.query(queryForCheck,(err:Error,data):void=>{
            if(err) throw err
            if(data.rows.length === 0){
                const query: string = `INSERT INTO users (email,password) VALUES ('${email}','${password}')`;
                client.query(query,(err:Error):void=>{
                    if(err) throw err
                })
                res.send('User added')
                return 
            }
                res.send('already exists')
        })
    } catch(err:any){   
        console.log(err)
    }
})

module.exports = app;