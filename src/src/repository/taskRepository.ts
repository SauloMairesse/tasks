import { database } from "../../database/postgress";
import { Task, UpdatingTask } from "../schema&&types/task";

async function createTask(newTask: Task) {   
    return await database.query(`
        INSERT INTO tasks (name, time, "userId")
        VALUES ($1, $2, $3) 
    `, [newTask.name, newTask.time, newTask.userId])
}

async function getTaskById(id: number){
    const {rows: task} = await database.query(`
        SELECT * FROM tasks
        WHERE tasks.id = $1
    `, [id])

    return task
}

async function getUserTasks(id: number){
    const {rows: tasks } = await database.query(`
        SELECT * FROM tasks
        WHERE "userId" = $1 AND "done" = $2
    `, [id, false])

    return tasks
}

async function updateTaskTime(task: UpdatingTask){
    const {rows: tasks } = await database.query(`
       UPDATE tasks 
       SET time = $1
       WHERE id = $2
    `, [task.newTime, task.id])

    return tasks
}

async function finishTask(task: UpdatingTask){
    const {rows: tasks } = await database.query(`
       UPDATE tasks 
       SET done = $1
       WHERE id = $2
    `, [task.done, task.id])

    return tasks
}

export const taskRepository = {
    createTask,
    getTaskById,
    getUserTasks,
    updateTaskTime,
    finishTask
}