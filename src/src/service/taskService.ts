import { taskRepository } from "../repository/taskRepository"
import { Task } from "../schema&&types/task"

async function createTask(newTask: Task) {
    return await taskRepository.createTask(newTask)
}

async function getTask(id: number) {
    return await taskRepository.getTaskById(id)
}

async function getUserTasks(id: number) {
    return await taskRepository.getUserTasks(id)
}


async function putTaskTime(id: number) {
    return await taskRepository.putTaskTime(id)
}

export const taskService = {
    createTask,
    getTask,
    getUserTasks,
    putTaskTime
}