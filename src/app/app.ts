import express, { Request, Response } from 'express'
import cors from 'cors'
import { studentRoutes } from './modules/students/student.routes'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response)=>{
    res.send('hello')
})

app.use('/api/v1/students', studentRoutes)


export default app;