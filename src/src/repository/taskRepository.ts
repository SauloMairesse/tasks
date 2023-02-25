import { database } from "../../database/postgress";
import { Task } from "../schema&&types/task";

async function createTask(newTask: Task) {
    
    const {rows: task} = await database.query(`
        INSERT INTO tasks (name, time, "userId")
        VALUES ($1, $2, $3) 
    `, [newTask.name, newTask.time, newTask.userId])

    return task
}

async function getTaskById(id: number){

    const {rows: task} = await database.query(`
    SELECT * FROM tasks 
    WHERE tasks.id = $1
    `, [id])

    return task
}

export const taskRepository = {
    createTask,
    getTaskById
}