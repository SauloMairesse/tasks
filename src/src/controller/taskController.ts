import { Request, Response } from "express";
import { taskService } from "../service/taskService";
import { updateTaskFormat } from "../schema&&types/task";

export async function postTask(req: Request, res: Response) {
    const task = req.body;
    const newTask = await taskService.createTask(task)
 
    return res.sendStatus(200)
}

export async function getTask(req: Request, res: Response) {
    const taskId = Number(req.params.id) 
    const task = await taskService.getTask(taskId)
    
    return res.status(200).send(task)
}

export async function getUserTask(req: Request, res: Response) {
    const userId = Number(req.params.userid)  
    const tasks = await taskService.getUserTasks(userId)
    
    return res.status(200).send(tasks)
}

export async function putTaskTime(req: Request, res: Response) { 
    const userId = Number(req.params.taskid)
    const oldTask = req.body
    console.log('body : ', oldTask)
    const taskUpdate = await taskService.updateTask(oldTask)
    
    return res.status(200).send(taskService)
}