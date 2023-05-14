import { Request, Response, NextFunction } from "express";

export function schemaValidation(schema: {validate: Function}) {

    return (req: Request, res: Response, next: NextFunction) => {
        console.log('Req.body in schema: ', req.body)
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            console.log('error detalhe :', error.details.map((detail: any) => detail.message))
            return res.status(400).send(error.details.map((detail: any) => detail.message));
        }

        next();
    }
}