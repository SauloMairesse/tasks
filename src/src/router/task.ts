import { Router } from "express";
import { postTask } from "../controller/taskController";
import { schemaValidation } from "../middleware/schemaValidation";
import { newTask } from "../schema&&types/task";

export const taskRouter = Router()

taskRouter.post('/task', schemaValidation(newTask), postTask )
taskRouter.get('/task', )