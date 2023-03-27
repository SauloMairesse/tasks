import { Request, Response, NextFunction } from "express";

export const schemaValidation = (schema: { validate: Function }) => (req: Request, res: Response, next: NextFunction) => { 
        console.log('task in middleware :', req.body)
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error) throw "Erro SchemaValidation!";
        next();
    }