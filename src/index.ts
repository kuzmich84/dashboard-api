import express , {Request, Response, NextFunction} from "express"
import {userRouter} from "./users/users.js"

const port = 8000
const app = express()

const cb =(req: Request , res: Response, next: NextFunction)=>{
    console.log('CB')
    next();
}


app.all('/hello', (req, res, next)=>{
    console.log('all')
    next()
})


app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/plain')
    res.status(200).send("Привет")
})

app.use('/users', userRouter)


app.listen(port, ()=>{
    console.log(`Сервер запущен на ${port} порту`)
})
