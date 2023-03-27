import express, {json} from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { taskRouter } from './src/router/task';

dotenv.config()
const app = express();

app.use(cors())
app.use(json())

app.use(taskRouter)

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`Funfando na porta: ${PORT}`)
})
