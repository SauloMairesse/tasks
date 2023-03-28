import { Request, Response } from "express";
import { taskService } from "../service/taskService";

export async function postTask(req: Request, res: Response) {
    const task = req.body;
    console.log('task in controller :', task)

    const newTask = await taskService.createTask(task)
    console.log('sending new task:', newTask)
    return res.status(200).send(newTask)
}

export async function getTask(req: Request, res: Response) {
    const taskId = Number(req.params.id) 

    const task = await taskService.getTask(taskId)
    console.log(task)
    
    return res.status(200).send('consegui')
}

export async function getUserTask(req: Request, res: Response) {
    const userId = Number(req.params.userid)  

    const tasks = await taskService.getUserTasks(userId)
    console.log('tasks :', tasks)
    
    return res.status(200).send(tasks)
}