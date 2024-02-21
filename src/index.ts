import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
// require('dotenv').config()

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors({
    origin: ['localhost', '127.0.0.1']
}))

let test:any = 1;
test = "1";

app.get('/', (req: Request, res: Response)=>{
    let data = req.query.my_param
    res.send(`<h1>Hello Express my_param ${data}</h1>`)
})

app.get('/:user_id', (req: Request, res: Response)=>{
    let data = req.params.user_id
    res.send(`<h1>Hello Express user_id ${data}</h1>`)
})

app.post('/', (req: Request, res: Response)=> {
    let data = req.body
    res.json(data)
    // res.send(process.env.KEY)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
/*
app.listen(port, function(){

})
*/
