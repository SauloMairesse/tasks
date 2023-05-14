import Joi from "joi"

export const newTask = Joi.object({
    name:   Joi.string().required(),
    time:   Joi.string().pattern(new RegExp(/^([0-9]{1,2})\:([0-9]{1,2})$/)).required(),
    userId: Joi.number().integer()
})

export const updateTaskFormat = Joi.object({
    id:     Joi.number().required(),
    name:   Joi.string().required(),
    time:   Joi.string()
            .pattern(new RegExp(/^([0-9]{1,2})\:([0-9]{1,2})$/))
            .required(),
    userId: Joi.number().integer().required(),
    done: Joi.boolean().required(),
    newTime: Joi.string()
            .pattern(new RegExp(/^([0-9]{1,2})\:([0-9]{1,2})$/))
            .required()
})

export type UpdatingTask = {
    id:     number,
    name:   string,
    time:   string,
    userId: number,
    done: boolean,
    newTime: string
}

export type Task  = {
    name: string;
    time: string;
    userId: number
}

export type OldTask = {
    id: number;
    name: string;
    time: string;
    userId: number
}