
import { Request, Response } from "express";
import { taskService } from "../service/taskService";

export async function postTask(req: Request, res: Response) {
    const task = req.body;

    const newTask = await taskService.createTask(task)

    return res.status(200).send(newTask)
}

export async function getTask(req: Request, res: Response) {
    const taskId = Number(req.params.id)

    const task = await taskService.getTask(taskId)
    
    return res.status(200).send(task)
}