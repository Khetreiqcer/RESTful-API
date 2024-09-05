import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors: { [key: string]: string }[] = [];
    
    errors.array().forEach((err) => {
        if ('path' in err) {
            extractedErrors.push({ [err.path]: err.msg });
        } else {
            extractedErrors.push({ error: err.msg });
        }
    });
    return res.status(422).json({
        errors: extractedErrors,
    });
}
