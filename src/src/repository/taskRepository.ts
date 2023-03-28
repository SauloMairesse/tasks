import { database } from "../../database/postgress";
import { Task } from "../schema&&types/task";

async function createTask(newTask: Task) {
    console.log('newTask in repository :', newTask)
    
    const {rows: inserted} = await database.query(`
        INSERT INTO tasks (name, time, "userId")
        VALUES ($1, $2, $3) 
    `, [newTask.name, newTask.time, newTask.userId])

    console.log('task to controller in repository :', inserted)
    return inserted
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
        WHERE "userId" = $1
    `, [id])

    console.log('tasks of user repository :', tasks)
    return tasks
}

export const taskRepository = {
    createTask,
    getTaskById,
    getUserTasks
}