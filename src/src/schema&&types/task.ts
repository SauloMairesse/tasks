import Joi from "joi"

export const newTask = Joi.object({
    name:   Joi.string().required(),
    time:   Joi.string().pattern(new RegExp(/^([0-9]{1,2})\:([0-9]{1,2})$/)).required(),
    userId: Joi.number().integer()
})

export type Task  = {
    name: string;
    time: string;
    userId: number
}