import { Router } from "express";
import { getTask, getUserTask, postTask, putTaskTime } from "../controller/taskController";
import { schemaValidation } from "../middleware/schemaValidation";
import { newTask, updateTaskFormat } from "../schema&&types/task";

export const taskRouter = Router()

taskRouter.post('/newtask', schemaValidation(newTask), postTask)
taskRouter.get('/task/:userid', getUserTask)
taskRouter.put('/task/time/:taskid', schemaValidation(updateTaskFormat), putTaskTime)