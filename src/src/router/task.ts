import { Router } from "express";
import { getTask, getUserTask, postTask } from "../controller/taskController";
import { schemaValidation } from "../middleware/schemaValidation";
import { newTask } from "../schema&&types/task";

export const taskRouter = Router()

taskRouter.post('/newtask', schemaValidation(newTask), postTask)
taskRouter.get('/task/:userid', getUserTask)