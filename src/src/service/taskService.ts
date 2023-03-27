import { taskRepository } from "../repository/taskRepository"
import { Task } from "../schema&&types/task"

async function createTask(newTask: Task) {
    console.log('newTask service :', newTask)
    const task = await taskRepository.createTask(newTask)
}

async function getTask(id: number) {
    const task = await taskRepository.getTaskById(id)
    return task
}

export const taskService = {
    createTask,
    getTask
}